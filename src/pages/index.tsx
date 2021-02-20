import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../utils/getValidationErros';

import SEO from '../components/SEO';
import Input from '../components/Input';
import Button from '../components/SubmitButton';

import { Container, SideBox, GradientBox, Content, Form, FieldGroup, ErrorMessage } from '../styles/pages/Home';

import { Auth } from '../store/ducks/auth/types';
import { ApplicationState } from '../store';

import * as AuthActions from '../store/ducks/auth/actions';

interface StateProps {
  auth: Auth;
  loading: boolean;
  signed: boolean;
  error: boolean;
}

interface DispatchProps {
  loginRequest(email: string, password: string): void
}

type Props = StateProps & DispatchProps

interface SignInFormData {
  email: string;
  password: string;
}

const Home: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);
  const { loginRequest } = props;
  const loading = props.loading;
  const signed = props.signed;
  const error = props.error;

  useEffect(() => {
    if(localStorage.getItem('@WiserTeste:token')) {
      router.push('/dashboard');
    }
  }, []);

  useMemo(() => {
    if(signed) {
      if(localStorage.getItem('@WiserTeste:token')) {
        router.push('/dashboard');
      }
    }
  }, [signed]);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        loginRequest(data.email, data.password);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [],
  );
  
  return (
    <>
      <SEO 
        title="Challenge Login - Frontend - Wiser Educação" shouldExludeTitleSuffix
        description="Objetivo: Criar uma aplicação de login, ou seja, acesso de um usuário. Com funcionamento simples: ao preencher e-mail e senha deverá ser mostrado um alerta com
        sucesso ou erro. Também ter uma validação de preenchimento correto em campo de texto."
      />
      <Container>
        <SideBox>
          <Image
            src="/images/login-background.png"
            alt="Mulher usando notebook"
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          <GradientBox />
        </SideBox>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Olá, seja<br/>bem-vindo!</h1>
            <h2 className="bold">Para acessar a plataforma, faça seu login.</h2>

            {error && (
              <ErrorMessage data-testid="error-message">E-mail ou senha inválido.</ErrorMessage>
            )}

            <FieldGroup>
              <label htmlFor="email">E-mail</label>
              <Input name="email" type="email" id="email" placeholder="exemplo@mail.com" authentication_failed={error} />
            </FieldGroup>

            <FieldGroup>
              <label htmlFor="password">Senha</label>
              <Input name="password" type="password" id="password" placeholder="Senha" authentication_failed={error} />
            </FieldGroup>

            <Button type="submit" data-testid="submit" name="submit">{loading ? 'Entrando' : 'Entrar'}</Button>
          </Form>

          <p>Esqueceu seu login ou senha? Clique <Link href="/esqueci-senha">aqui</Link></p>
        </Content>
      </Container>
    </>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth.auth,
  loading: state.auth.loading,
  signed: state.auth.signed,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
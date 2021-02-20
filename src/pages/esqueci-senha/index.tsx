import Image from 'next/image'
import Link from 'next/link';

import { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';

import SEO from '../../components/SEO';
import Input from '../../components/Input';
import Button from '../../components/SubmitButton';

import { Container, SideBox, GradientBox, Content, Form, FieldGroup } from '../../styles/pages/EsqueciSenha';

interface FormData {
  email: string;
}

const EsqueciSenha: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [enviando, setEnviando] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
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
            <h1>Esqueceu<br/>sua senha?</h1>
            <h2 className="bold">Nos informe seu e-mail para recuperá-la.</h2>

            <FieldGroup>
              <label htmlFor="email">E-mail</label>
              <Input name="email" type="email" id="email" placeholder="exemplo@mail.com" />
            </FieldGroup>

            <Button type="submit" data-testid="submit" name="submit">{enviando ? 'Enviando...' : 'Enviar'}</Button>
          </Form>

          <p>Lembrou sua senha? Clique <Link href="/">aqui</Link> para voltar</p>
        </Content>
      </Container>
    </>
  );
}

export default EsqueciSenha;
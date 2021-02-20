import Image from 'next/image'
import { useRouter } from 'next/router'

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RiLogoutBoxFill } from 'react-icons/ri';

import { Container, Background, GradientBox, Content } from '../../styles/pages/Dashboard';

import SEO from '../../components/SEO';
import { Auth } from '../../store/ducks/auth/types';
import { ApplicationState } from '../../store';

import * as AuthActions from '../../store/ducks/auth/actions';

interface StateProps {
  auth: Auth;
  loading: boolean;
  signed: boolean;
  error: boolean;
}

interface DispatchProps {
  logoutRequest(): void
}

type Props = StateProps & DispatchProps

const Dashboard: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const { logoutRequest, signed } = props;
  
  useEffect(() => {
    if(localStorage.getItem('@WiserTeste:token') === null) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if(localStorage.getItem('@WiserTeste:token') === null) {
      router.push('/');
    }
  }, [signed]);

  function handleSignOut() {
    logoutRequest();
  }
  
  return (
    <>
      <SEO 
        title="Challenge Login - Frontend - Wiser Educação" shouldExludeTitleSuffix
        description="Objetivo: Criar uma aplicação de login, ou seja, acesso de um usuário. Com funcionamento simples: ao preencher e-mail e senha deverá ser mostrado um alerta com
        sucesso ou erro. Também ter uma validação de preenchimento correto em campo de texto."
      />
      <Container>
        <Background>
          <Image
            src="/images/login-background.png"
            alt="Mulher usando notebook"
            layout="fill"
            objectFit="cover"
            objectPosition="0 20%"
            quality={100}
          />

          <GradientBox />
        </Background>

        <Content>
          <h1>Conectado com sucesso!</h1>
          <RiLogoutBoxFill size={80} color="var(--pink)" onClick={handleSignOut} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
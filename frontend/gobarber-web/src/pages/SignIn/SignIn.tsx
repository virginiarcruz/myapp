import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background, Form, LinkContent } from './styles';
import { FiLogIn } from 'react-icons/fi';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit"> Entrar </button>
        <a href="forgot">Esqueci minha senha</a>
      </Form>
      <LinkContent href="login">
        <FiLogIn />
        Criar conta
      </LinkContent>
    </Content>
    <Background />
  </Container>
);

export default SignIn;

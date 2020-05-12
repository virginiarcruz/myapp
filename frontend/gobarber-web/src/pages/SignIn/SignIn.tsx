import React from 'react';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background, LinkContent } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit"> Entrar </Button>
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

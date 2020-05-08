import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background, Form, LinkContent } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form>
        <h1>Faça seu cadastro</h1>

        <Input name="nome" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit"> Cadastrar </Button>
      </Form>
      <LinkContent href="login">
        <FiArrowLeft />
        Voltar para logon
      </LinkContent>
    </Content>
  </Container>
);

export default SignUp;

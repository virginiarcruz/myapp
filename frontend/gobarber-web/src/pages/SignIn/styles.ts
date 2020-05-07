import styled from 'styled-components/macro';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  max-width: 700px;
  width: 100%;
`;

export const Form = styled.form`
  margin: 80px auto;
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    margin-top: 16px;
    width: 100%;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(95%);
    }
  }
  a {
    color: #f4ede8;
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      filter: brightness(85%);
    }
  }
`;

export const LinkContent = styled.a`
  color: #ff9000;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  display: flex;
  align-self: center;
  align-items: center;
  &:hover {
    filter: brightness(95%);
  }

  svg {
    margin-right: 16px;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

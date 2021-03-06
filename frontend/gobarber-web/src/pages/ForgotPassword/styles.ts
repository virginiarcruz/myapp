import styled, { keyframes } from 'styled-components/macro';
import { Link } from 'react-router-dom';

import signInBackgroundImg from '../../assets/sign-in-background.png';

import { grayLighter, orange } from '../../styles/colors';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  max-width: 700px;
  width: 100%;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px auto;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${grayLighter};
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
  }
`;

export const LinkContent = styled(Link)`
  color: ${orange};
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

import styled, { keyframes } from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { grayLighter, orange, grayDarken } from '../../styles/colors';

export const Container = styled.main`
  > header {
    height: 144px;
    background: ${grayDarken};

    display: flex;
    align-items: center;
    color: white;
    padding: 0 10%;

    svg {
      width: 24px;
      height: 24px;
      color: ${grayLighter};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  margin: -70px auto 0;

  width: 100%;

  form {
    margin: 0 auto;
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    > div:nth-child(4) {
      margin-top: 24px;
    }

    a {
      color: ${grayLighter};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        filter: brightness(85%);
      }
    }
  }
`;

export const LinkContent = styled(Link)`
  color: ${grayLighter};
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

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  aling-self: center;
  width: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    background: ${orange};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;

    svg {
      with: 20px;
      height: 20px;
    }
  }
`;

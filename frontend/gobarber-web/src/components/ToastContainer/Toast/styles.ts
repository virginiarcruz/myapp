import styled, { css } from 'styled-components/macro';
import {
  blue,
  blueLight,
  green,
  greenLight,
  red,
  redLight,
} from '../../../styles/colors';

interface ToastProps {
  type: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: ${blueLight};
    color: ${blue};
  `,
  success: css`
    background-color: ${greenLight};
    color: ${green};
  `,
  error: css`
    background-color: ${redLight};
    color: ${red};
  `,
};

export const Container = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${({ type }) => toastTypeVariations[type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 12px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ hasDescription }) =>
    hasDescription &&
    css`
      align-items: center;
    `}
`;

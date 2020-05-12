import styled, { css } from 'styled-components/macro';
import { grayLight, grayLighter, grayDark, orange } from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${grayDark};
  border-radius: 10px;
  border: 2px solid ${grayDark};
  padding: 16px;
  width: 100%;
  color: ${grayLight};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${orange};
      color: ${orange};
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${orange};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${grayLighter};

    &::placeholder {
      color: ${grayLight};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

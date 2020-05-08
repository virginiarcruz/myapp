import styled from 'styled-components/macro';

import { grayLight, grayLighter, grayDark } from '../../styles/colors';

export const Container = styled.div`
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

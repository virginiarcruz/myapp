import styled from 'styled-components/macro';

import { orange, gray } from '../../styles/colors';

export const Container = styled.button`
  background: ${orange};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${gray};
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

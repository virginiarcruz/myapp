import styled from 'styled-components/macro';

import { orange, gray } from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${orange};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translate(-50%);
    color: ${gray};
    &::before {
      border-style: solid;
      border-color: ${orange} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

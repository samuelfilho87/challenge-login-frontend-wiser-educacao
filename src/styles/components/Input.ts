import styled, { css } from 'styled-components';
import Tooltip from '../../components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border: 1px solid var(--pastel-blue);
  border-radius: 8px;
  color: var(--pastel-blue);
  transition: all 0.3s;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  &:hover {
    border: 1px solid var(--purple);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--pink);
      
      input {
        color: var(--pink) !important;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid var(--purple);
      
      input {
        color: var(--purple) !important;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--purple);
    `}

  input {
    padding: 0 16px;
    font-size: 12px;
    color: var(--pastel-blue);
    line-height: 48px;
    background: transparent;
    border: 0;
    flex: 1;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-right: 8px;
  cursor: pointer;

  svg {
    margin:0;
  }

  span {
    background: var(--pink);
    color: var(--pure-white);
    text-align: center;

    &::before {
      border-color: var(--pink) transparent;
    }
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 8px;
  font-size: 12px;
  color: var(--pink);
  text-indent: 16px;
`;

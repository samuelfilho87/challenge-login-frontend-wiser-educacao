import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;

  @media screen and (max-width: 375px) {
    div {
      img {
        object-position: 40% 0 !important;
      }
    }
  }
`;

export const GradientBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, var(--very-dark-purple) 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
`;

export const Content = styled.section`
  width: 100%;
  max-width: 480px;
  padding: 24px;
  z-index: 1100;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 16px;
    font-size: 60px;
    font-weight: 600;
    line-height: 60px;
    color: var(--white);
    text-align: center;
  }

  svg {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      fill: var(--purple);
    }
  }

  @media screen and (max-width: 375px) {
    h1 {
      margin-bottom: 16px;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
  }
`;
import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 112px;

  @media screen and (max-width: 768px) {
    gap: 0;
  }
`;

export const SideBox = styled.div`
  position: relative;
  width: 56%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  @media screen and (max-width: 375px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 386px;

    z-index: 1000;
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

  @media screen and (max-width: 375px) {
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);
  }
`;

export const Content = styled.section`
  width: 256px;

  h1 {
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    text-align: center;
    color: var(--dark-pastel-blue);
  }

  h2, p {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: var(--pastel-blue);
  }

  h2 {
    margin-bottom: 43px;
  }

  p {
    font-size: 14px;
    text-align: center;

    a {
      color: var(--purple);
      transition: all 0.3s;

      &:hover {
        color: var(--pink);
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 375px) {
    width: 83%;
    margin-top: 136px;
    z-index: 1100;

    h1 {
      margin-bottom: 16px;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }

    h2, p {
      font-size: 12px;
      font-weight: 500;
      color: var(--pastel-blue);
    }

    h2 {
      margin-bottom: 20px;
      text-align: center;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      color: var(--pure-white);

      a {
        color: inherit;
      }
    }
  }
`;

export const Form = styled(Unform)`
  margin-bottom: 32px;

  @media screen and (max-width: 375px) {
    position: relative;
    width: 100%;
    margin-bottom: 48px;
    padding: 24px 28px 54px 28px;
    border-radius: 8px;
    background: var(--white);
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  & + & {
    margin-top: 16px;
  }

  label {
    margin-bottom: 8px;
    font-size: 12px;
    color: var(--dark-pastel-blue);
    text-transform: uppercase;
    text-indent: 10px;

    @media screen and (max-width: 375px) {
      font-size: 10px;
    }
  }
`;

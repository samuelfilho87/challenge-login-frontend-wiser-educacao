import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;
  color: var(--pure-white);
  text-transform: uppercase;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(267.79deg, #9D25B0 0%, #383E71 99.18%);
  }

  @media screen and (max-width: 375px) {
    position: absolute;
    width: 168px;
    left: calc(50% - 168px/2);
    margin-top: 32px;
    padding: 0 48px;
    box-shadow: none;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  div {
    text-align: center;
  }

  h1 {
    margin-bottom: 30px;
  }
`;

export const Botao = styled.button`
  background-color: #ffc971;
  border: 0;
  cursor: pointer;
  padding: 20px 40px;

  :hover {
    box-shadow: 0 0 10px #ccc;
    transition: .3s;
  }
`;

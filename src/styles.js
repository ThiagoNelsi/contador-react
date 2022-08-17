import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  div {
    text-align: center;
  }

  h1 {
    margin-bottom: 30px;
  }
`;

export const Operacoes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  width: 500px;
`;

export const Botao = styled.button`
  background-color: #ffc971;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px 40px;
  width: 200px;

  :hover {
    box-shadow: 0 0 10px #ccc;
    transition: .3s;
  }
`;

export const Historico = styled.div`
  height: 150px;
  overflow: auto;
`;

import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.visivel ? 'flex' : 'none' };
  justify-content: center;
  align-items: center;
`;

export const Conteudo = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    svg {
      cursor: pointer;
    }
  }
`;

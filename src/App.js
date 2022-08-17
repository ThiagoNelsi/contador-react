import { useState, useEffect, useRef } from "react";
import Modal from "./components/Modal";
import { Container, Botao, Operacoes, Historico } from "./styles";

function App() {
  // Estado é uma variável que quando é alterada gera uma nova renderização
  // useState => React Hook
  // [0, atualizarValor]
  const [numero, atualizarNumero] = useState(0);
  const [historico, atualizarHistorico] = useState([]);
  const [modalVisivel, atualizarModalVisivel] = useState(false);

  // O callback será executado sempre que o state numero for alterado.
  // O numero é declarado no array de dependências, segundo argumento do useEffect.
  // Para executar o useEffect apenas na primeira vez, declarar o array vazio.
  useEffect(() => {
    // Podemos passar um callback no 'setter' do state que recebe o valor antigo como argumento.
    atualizarHistorico((valorAntigo) => [...valorAntigo, numero]);
  }, [numero]);

  // Criando a referência historicoRef
  const historicoRef = useRef();

  // Atualizando a referência com useEffect e useRef.
  useEffect(() => {
    if (historicoRef.current?.scrollHeight)
      historicoRef.current.scrollTop = historicoRef.current.scrollHeight;
  }, [historico]);

  function zerar() {
    atualizarNumero(0);
  }

  function somar() {
    atualizarNumero(numero + 1);
  }

  function subtrair() {
    atualizarNumero(numero - 1);
  }

  function multiplicar() {
    atualizarNumero(numero * 2);
  }

  function dividir() {
    atualizarNumero(numero / 2);
  }

  function inserirFormula() {
    atualizarModalVisivel(true);
  }

  function fecharModal() {
    atualizarModalVisivel(false);
  }

  return (
    <Container>
      <Modal
        titulo='Inserir fórmula'
        visivel={modalVisivel}
        fecharModal={fecharModal}
      >
        <input type='text' placeholder='Ex.: x + 2 - (3 * x)' />
        <button>Calcular</button>
      </Modal>
      <div>
        <h1>{numero.toFixed(2)}</h1>
        <Operacoes>
          <Botao onClick={zerar}>Zerar</Botao>
          <Botao onClick={somar}>Somar 1</Botao>
          <Botao onClick={subtrair}>Subtrair 1</Botao>
          <Botao onClick={multiplicar}>Multiplicar por 2</Botao>
          <Botao onClick={dividir}>Dividir por 2</Botao>
          <Botao onClick={inserirFormula}>Inserir fórmula</Botao>
        </Operacoes>
      </div>
      {/* Definindo a referência historicoRef */}
      <Historico ref={historicoRef}>
        {historico.map((valor, index) => (
          <p key={index}>{valor}</p>
        ))}
      </Historico>
    </Container>
  );
}

export default App;

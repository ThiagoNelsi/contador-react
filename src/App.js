import { useState } from 'react';
import { Container, Botao } from './styles';

function App() {

  // Estado é uma variável que quando é alterada gera uma nova renderização
  // useState => React Hook
  // [0, atualizarValor]
  const [numero, atualizarNumero] = useState(0);

  function somar() {
    // numero = numero + 1;
    atualizarNumero(numero + 1);
  }

  console.log(numero);

  return (
    <Container>
      <div>
        <h1>{numero}</h1>
        <Botao onClick={somar}>Somar 1</Botao>
      </div>
    </Container>
  );
}

export default App;

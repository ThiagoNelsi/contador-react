import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types';
import { Overlay, Conteudo } from "./styles";

function Modal({ titulo, children, visivel = false, fecharModal }) {

  function pararPropagacao(event) {
    event.stopPropagation();
  }

  return (
    <Overlay
      visivel={visivel}
      onClick={fecharModal}
    >
      <Conteudo onClick={pararPropagacao}>
        <header>
          {titulo}
          <MdClose onClick={fecharModal} />
        </header>
        {children}
      </Conteudo>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  titulo: PropTypes.string.isRequired,
  visivel: PropTypes.bool.isRequired,
  fecharModal: PropTypes.func.isRequired,
}

export default Modal;

import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types';
import { Overlay, Conteudo } from "./styles";

function Modal({ titulo, children, visivel, fecharModal }) {
  return (
    <Overlay visivel={visivel}>
      <Conteudo>
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
}

export default Modal;

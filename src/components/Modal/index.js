import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types';
import { Overlay, Conteudo } from "./styles";

function Modal({ titulo, children }) {
  return (
    <Overlay>
      <Conteudo>
        <header>
          {titulo}
          <MdClose />
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

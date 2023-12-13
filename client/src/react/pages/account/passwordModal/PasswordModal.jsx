import Modal from '../../../components/Modal/Modal';
import { ModalWrapperStyled } from '../Account.styled';
import PasswordStepper from './PasswordStepper';

const PasswordModal = ({ openModal, setModal, user }) => {
  return (
    <Modal open={ openModal } onClose={ () => setModal(false) }>
      <ModalWrapperStyled>
        <PasswordStepper user={ user } />
      </ModalWrapperStyled>
    </Modal>
  );
};

export default PasswordModal;

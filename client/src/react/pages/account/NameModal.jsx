import { TextField } from '@mui/material';
import Modal from '../../components/Modal/Modal';
import { ButtonStyled, ModalWrapperStyled } from './Account.styled';
import { useUpdateNameOrPasswordMutation } from '../../../redux/api/apiSlice';
import { setEditedData } from '../../../redux/userSlice/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NameModal = ({ openModal, setModal, user }) => {
  const [updateMutation] = useUpdateNameOrPasswordMutation();
  const [name, setName] = useState(user?.firstName);
  const dispatch = useDispatch();
  const handleSubmit = async event => {
    event.preventDefault();
    const account = {
      id: user?._id,
      data: event.currentTarget.elements.firstName.value,
      key: 'firstName'
    };
    const data = await updateMutation(account).unwrap();
    dispatch(setEditedData(data));
  };

  return (
    <Modal open={ openModal } onClose={ () => setModal(false) }>
      <form onSubmit={ handleSubmit }>
        <ModalWrapperStyled>
          <TextField
            name='firstName'
            variant='outlined'
            placeholder='Name'
            defaultValue={ user?.firstName }
            onChange={ e => setName(e.target.value) }
          />
          <ButtonStyled
            disabled={ user?.firstName === name }
            variant='outlined'
            type='submit'
            onClick={ () => setModal(false) }>
            Edit
          </ButtonStyled>
        </ModalWrapperStyled>
      </form>
    </Modal>
  );
};

export default NameModal;

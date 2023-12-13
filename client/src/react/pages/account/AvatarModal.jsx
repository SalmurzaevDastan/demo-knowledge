import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import { useUpdateImageMutation } from '../../../redux/api/apiSlice';
import { useDispatch } from 'react-redux';
import { setEditedData } from '../../../redux/userSlice/userSlice';
import { ButtonStyled, ModalWrapperStyled } from './Account.styled';

const AvatarModal = ({ openModal, setModal, user }) => {
  const [updateMutation] = useUpdateImageMutation();
  const [fileName, setFileName] = useState('Change Avatar');
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const account = {
      id: user._id,
      picture: event.currentTarget.elements.picture.files[0]
    };
    const data = await updateMutation(account).unwrap();
    dispatch(setEditedData(data));
  };

  return (
    <Modal open={ openModal } onClose={ () => setModal(false) }>
      <form onSubmit={ handleSubmit }>
        <ModalWrapperStyled>
          <label htmlFor='upload-photo'>
            <input
              style={ { display: 'none' } }
              id='upload-photo'
              required
              name='picture'
              type='file'
              onChange={ e => setFileName(e.target.files[0].name) }
            />

            <ButtonStyled variant='outlined' component='span'>
              {fileName}
            </ButtonStyled>
          </label>
          <ButtonStyled
            type='submit'
            variant='outlined'
            onClick={ () => setModal(false) }
            disabled={ fileName === 'Change Avatar' }>
            Save
          </ButtonStyled>
        </ModalWrapperStyled>
      </form>
    </Modal>
  );
};

export default AvatarModal;

import { useContext } from 'react';
import styled from 'styled-components';
import { ApplicationContext } from '../context/ApplicationContextProvider';
import Button from './Button';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

interface IDeleteUserModal {
  handleDeleteUser: (userId: number) => void;
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 52%;
`;

const DeleteUserModal: React.FC<IDeleteUserModal> = ({handleDeleteUser}) => {
  const {showDeleteUserModal, setShowDeleteUserModal, selectedUser} = useContext(ApplicationContext)

  const handleDelete = () => {
    handleDeleteUser(selectedUser.id)
    setShowDeleteUserModal(!showDeleteUserModal)
  }

  return (
    <ModalWrapper setShowModal={setShowDeleteUserModal} style={{width: '500px', height: '160px'}}>
      <PageTitle title='Deseja excluir o usuário?'/>
      <ButtonsContainer>
        <Button
          title='Confirmar'
          handleDelete={handleDelete}
          style={{backgroundColor: '#2E7D32', width: '120px'}}
        />
        <Button
          title='Cancelar'
          setShowModal={setShowDeleteUserModal}
          showModal={showDeleteUserModal}
          style={{backgroundColor: '#E5E5E5', color: '#34423D', width: '120px'}}
        />
      </ButtonsContainer>
    </ModalWrapper>
  )
}

export default DeleteUserModal;

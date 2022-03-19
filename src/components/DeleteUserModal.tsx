import styled from 'styled-components';
import Button from './Button';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

interface IDeleteUserModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  handleDeleteUser: (userId: number) => void;
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 52%;
`;

const DeleteUserModal: React.FC<IDeleteUserModal> = ({showModal, setShowModal, userId, handleDeleteUser}) => {

  const handleDelete = () => {
    handleDeleteUser(userId)
  }

  return (
    <ModalWrapper setShowModal={setShowModal} style={{width: '500px', height: '160px'}}>
      <PageTitle title='Deseja excluir o usuário?'/>
      <ButtonsContainer>
        <Button
          title='Confirmar'
          setShowModal={setShowModal}
          showModal={showModal}
          handleDelete={handleDelete}
          style={{backgroundColor: '#2E7D32', width: '120px'}}
        />
        <Button
          title='Cancelar'
          setShowModal={setShowModal}
          showModal={showModal}
          style={{backgroundColor: '#E5E5E5', color: '#34423D', width: '120px'}}
        />
      </ButtonsContainer>
    </ModalWrapper>
  )
}

export default DeleteUserModal;

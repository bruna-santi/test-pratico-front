import { useContext } from 'react';
import styled from 'styled-components';
import { ApplicationContext } from '../context/ApplicationContextProvider';
import Button from './Button';
import ExitModalIcon from './ExitModalIcon';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

interface IDeleteUserModal {
  handleDeleteUser: (userId: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  max-width: 450px;
  min-width: 350px;
  height: 150px;
  background-color: #FFFFFF;
  padding: 28px;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 50%;
    max-width: 300px;
    min-width: 300px;
    height: 140px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  min-width: 270px;
`;

const DeleteUserModal: React.FC<IDeleteUserModal> = ({handleDeleteUser}) => {
  const {showDeleteUserModal, setShowDeleteUserModal, selectedUser} = useContext(ApplicationContext)

  const handleDelete = () => {
    handleDeleteUser(selectedUser.id)
    setShowDeleteUserModal(!showDeleteUserModal)
  }

  return (
    <ModalWrapper>
      <Container>
        <ExitModalIcon setShowModal={setShowDeleteUserModal} style={{alignSelf: 'flex-end', marginBottom: '10px'}}/>
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
      </Container>
    </ModalWrapper>
  )
}

export default DeleteUserModal;

import { useContext } from 'react';
import styled from 'styled-components';
import { ApplicationContext } from '../context/ApplicationContextProvider';
import DetailsData from './DetailsData';
import ExitModalIcon from './ExitModalIcon';
import PageTitle from './PageTitle';

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 20px;
  background-color: rgba(8, 8, 17, 0.1);

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 330px;
  background-color: #FFFFFF;
  padding: 28px;
  border-radius: 10px;

  @media only screen and (max-width: 1200px) {
    width: 83%;
    height: 330px;
    padding: 20px;
  }

  @media only screen and (max-width: 600px) {
    width: 83%;
    padding: 20px;
  }

  @media only screen and (max-width: 1200px) {
    width: 50%;
  }

  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  @media only screen and (max-width: 480px) {
    width: 80%;
  }
  `;

const UserDetailsModal = () => {
  const {selectedUser, setShowUserDetailsModal} = useContext(ApplicationContext)

  return (
    <ModalWrapper>
      <Container>
        <ExitModalIcon setShowModal={setShowUserDetailsModal} style={{alignSelf: 'flex-end', marginBottom: '10px'}}/>
        <PageTitle title='Detalhes' />
        <DetailsData label='Nome' data={selectedUser.name} />
        <DetailsData label='Email' data={selectedUser.email} />
        <DetailsData label='Telefone' data={selectedUser.phone} />
        <DetailsData label='Site' data={selectedUser.website} />
      </Container>
    </ModalWrapper>
  )
}

export default UserDetailsModal;

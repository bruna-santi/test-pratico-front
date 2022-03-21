import { Alert } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { challengeApi } from './api/ChallengeApi';
import AddNewModal from './components/AddNewModal';
import Button from './components/Button';
import DeleteUserModal from './components/DeleteUserModal';
import PageTitle from './components/PageTitle';
import UserDetailsModal from './components/UserDetailsModal';
import UsersTable from './components/usersTable/UsersTable';
import { ApplicationContext } from './context/ApplicationContextProvider';
import { IUser } from './interfaces';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 90%;
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

const Home = () => {
  const {showUserDetailsModal, showDeleteUserModal, showDeleteMessage, setShowDeleteMessage} = useContext(ApplicationContext)

  const [users, setUsers] = useState<IUser[]>([])
  const [showAddNewModal, setShowAddNewModal] = useState<boolean>(false)

  const fetchUsers = async () => {
    await challengeApi
      .getUsers()
      .then(response => {
        setUsers(response)
      })
      .catch(error => console.log(error))
  }
  
  const handleDeleteUser = async (userId: number) => {
    await challengeApi
    .deleteUser(userId)
    .then(() => {
      const filteredUsers = users.filter((user) => user.id !== userId)
      setUsers(filteredUsers)
      setShowDeleteMessage(true)
      setTimeout(() => setShowDeleteMessage(false), 3000)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleAddUser = (name: string, email: string, phone: string, site: string) => {
    users.push({name, email, phone, website: site, id: Math.round(Math.random()*1000)})
  }

  return (
    <PageWrapper>
      <Container>
        {showDeleteMessage && 
          <Alert
            severity="success"
            style={{
              alignSelf: 'center',
              position: 'fixed',
              top: '0',
              width: '90%',
              maxWidth: '400px',
              zIndex: '100',
            }}
          >
            Usuário excluído com sucesso!
          </Alert>
        }
        <PageTitle title='Usuários'/>
        <UsersTable
          bodyData={users}
          handleDeleteUser={handleDeleteUser}
        />
        <Button
          title='Adicionar novo'
          style={{
            backgroundColor:'#1976D2',
            width: '150px',
            marginTop: '32px'
            }}
          showModal={showAddNewModal}
          setShowModal={setShowAddNewModal}
        />
      </Container>
      {showAddNewModal &&
        <AddNewModal
          setShowModal={setShowAddNewModal}
          showModal={showAddNewModal}
          handleAddUser={handleAddUser}
        />
      }
      {showUserDetailsModal && 
        <UserDetailsModal />
      }
      {showDeleteUserModal &&
        <DeleteUserModal
          handleDeleteUser={handleDeleteUser}
        />
      }
    </PageWrapper>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { challengeApi } from './api/ChallengeApi';
import AddNewModal from './components/AddNewModal';
import Button from './components/Button';
import PageTitle from './components/PageTitle';
import UsersTable from './components/usersTable/UsersTable';

interface IUsers {
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number;
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 90%;
  margin-top: 50px;
`;

const App = () => {

  const [users, setUsers] = useState<IUsers[]>([])
  const [usersCopy, setUsersCopy] = useState<IUsers[]>([])
  const [showAddNewModal, setShowAddNewModal] = useState<boolean>(false)

  const fetchUsers = async () => {
    await challengeApi
      .getUsers()
      .then(response => {
        setUsers(response)
        setUsersCopy(response)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => { fetchUsers() }, [])

  const handleDeleteUser = (userId: number) => {
    const filteredUsers = usersCopy.filter((user) => user.id !== userId)
    setUsersCopy(filteredUsers)
  }

  const handleAddUser = (name: string, email: string, phone: string, site: string) => {
    usersCopy.push({name, email, phone, website: site, id: Math.random()})
  }

  return (
    <PageWrapper>
      <Container>
        <PageTitle title='Usuários'/>
        <UsersTable bodyData={usersCopy} handleDeleteUser={handleDeleteUser}/>
        <Button
          title='Adicionar Novo'
          style={{
            backgroundColor:'#1976D2',
            width: '150px',
            marginTop: '32px'
            }}
          showModal={showAddNewModal}
          setShowModal={setShowAddNewModal}
          // deleteUser={deleteUser}
        />
      </Container>
      {showAddNewModal &&
        <AddNewModal
          setShowModal={setShowAddNewModal}
          showModal={showAddNewModal}
          handleAddUser={handleAddUser}
        />
      }
    </PageWrapper>
  );
}

export default App;

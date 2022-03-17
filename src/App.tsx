import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { challengeApi } from './api/ChallengeApi';
import Button from './components/Button';
import PageTitle from './components/PageTitle';
import UsersTable from './components/usersTable/UsersTable';

interface IUsers {
  name: string;
  email: string;
  phone: string;
  website: string;
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
  width: 70%;
  height: 90%;
  margin-top: 50px;
  /* border: 1px solid red; */
`;

const App = () => {

  const [users, setUsers] = useState<IUsers[]>([])
  const [usersCopy, setUsersCopy] = useState<IUsers[]>([])

  const fetchUsers = async () => {
    await challengeApi
      .getUsers()
      .then(response => {
        setUsers(response)
        setUsersCopy(response)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {fetchUsers()}, [])

  return (
    <PageWrapper>
      <Container>
        <PageTitle title='Usuários'/>
        <UsersTable bodyData={users}/>
        <Button
          title='Adicionar Novo'
          style={{
            backgroundColor:'#1976D2',
            width: '150px',
            marginTop: '24px'
            }}
        />
      </Container>
    </PageWrapper>
  );
}

export default App;

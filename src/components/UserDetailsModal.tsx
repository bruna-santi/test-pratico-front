import { useState } from 'react';
import styled from 'styled-components';
import { challengeApi } from '../api/ChallengeApi';
import ExitModalIcon from './ExitModalIcon';
import PageTitle from './PageTitle';

interface IUser {
  data?: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    background-color: rgba(8, 8, 17, 0.1);
    cursor: pointer;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px;
    width: 576px;
    height: 333px;
    background-color: white;
    border-radius: 10px;
`;

const Data = styled.p`
  
`;

const UserDetailsModal: React.FC<IUser> = ({data, setShowModal}) => {

  return (
    <ModalWrapper>
      <ModalContainer>
        <ExitModalIcon setShowModal={setShowModal} style={{alignSelf: 'flex-end'}}/>
        <PageTitle title='Detalhes' />
        <Data>{`Nome: ${data.name}`}</Data>
        <Data>{`Email: ${data.email}`}</Data>
        <Data>{`Telefone: ${data.phone}`}</Data>
        <Data>{`Site: ${data.website}`}</Data>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default UserDetailsModal;

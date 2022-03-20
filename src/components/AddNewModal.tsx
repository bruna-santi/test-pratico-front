import { useState } from 'react';
import styled from 'styled-components';
import { challengeApi } from '../api/ChallengeApi';
import Button from './Button';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';
import TextFieldComponent from './TextFieldComponent';

interface IAddNewModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddUser: (name: string, email: string, phone: string, site: string) => void;
}

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 0;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 15px;
`;

const AddNewModal: React.FC<IAddNewModal> = ({showModal, setShowModal, handleAddUser}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')

  const handleCreateUser = async () => {
    await challengeApi
      .createUser({name, email, phone, site})
  }

  const handleSave = () => {
    handleCreateUser()
    handleAddUser(name, email, phone, site)
    setShowModal(false)
  }

  return (
    <ModalWrapper setShowModal={setShowModal}>
      <PageTitle title='Incluir Novo Usuário' />
      <InputsContainer>
        <TextFieldComponent
          label='Nome' 
          value={name} 
          placeholder='Nome' 
          setData={setName}
        />
        <TextFieldComponent
          label='Email' 
          value={email} 
          placeholder='Email' 
          setData={setEmail}
        />
      </InputsContainer>
      <InputsContainer>
        <TextFieldComponent
          label='Telefone'
          type='number' 
          value={phone} 
          placeholder='Telefone' 
          setData={setPhone}
        />
        <TextFieldComponent
          label='Site' 
          value={site} 
          placeholder='Site' 
          setData={setSite}
        />
      </InputsContainer>
      <ButtonsContainer>
        <Button
          title='Gravar'
          style={{backgroundColor: '#2E7D32', width: '100px'}}
          handleSave={handleSave}
        />
        <Button
          title='Cancelar'
          style={{backgroundColor: '#E5E5E5', color: '#34423D', width: '100px'}}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </ButtonsContainer>
    </ModalWrapper>
  )
}

export default AddNewModal;

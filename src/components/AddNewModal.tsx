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

  @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 15px;

  @media only screen and (max-width: 600px) {
      width: 67%;
  }
`;

const AddNewModal: React.FC<IAddNewModal> = ({showModal, setShowModal, handleAddUser}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<boolean>(false)
  const [siteError, setSiteError] = useState<boolean>(false)

  const handleCreateUser = async () => {
    await challengeApi
      .createUser({name, email, phone, site})
  }

  const validateFields = () => {
    checkNameIsInvalid()
    checkPhoneIsInvalid()
    checkEmailIsInvalid()
    checkSiteIsInvalid()
  }

  const handleSave = () => {

    validateFields()

    if (name !== '' && email !== '' && phone !== '' && site !== '') {
      handleCreateUser()
      handleAddUser(name, email, phone, site)
      setShowModal(false)
    }
  }

  const checkNameIsInvalid = () => {
    setNameError(name === '' ? true : false)
  }

  const checkPhoneIsInvalid = () => {
    setPhoneError(phone === '' ? true : false)
  }

  const checkEmailIsInvalid = () => {
    setEmailError(email === '' ? true : false)
  } 

  const checkSiteIsInvalid = () => {
    setSiteError(site === '' ? true : false)
  }

  return (
    <ModalWrapper
      setShowModal={setShowModal}
      heightMobile='420px'
      heightDeskotop='355px'
      widthMobile='83%'
    >
      <PageTitle title='Incluir novo usuário' />
      <InputsContainer>
        <TextFieldComponent
          label='Nome' 
          value={name} 
          placeholder='Nome' 
          setData={setName}
          isError={nameError}
        />
        <TextFieldComponent
          label='Email' 
          value={email} 
          placeholder='Email' 
          setData={setEmail}
          isError={emailError}
        />
      </InputsContainer>
      <InputsContainer>
        <TextFieldComponent
          label='Telefone'
          type='number' 
          value={phone} 
          placeholder='Telefone' 
          setData={setPhone}
          isError={phoneError}
        />
        <TextFieldComponent
          label='Site' 
          value={site} 
          placeholder='Site' 
          setData={setSite}
          isError={siteError}
        />
      </InputsContainer>
      <ButtonsContainer>
        <Button
          title='Salvar'
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

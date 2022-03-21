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

const RequiredMessage = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #D32F2F;
  margin-bottom: 10px;
`;

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

  @media only screen and (min-width: 400px), (max-width: 600px) {
    width: 67%;
  }

  @media only screen and (max-width: 400px) {
    width: 77%;
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
  const [isFieldInvalid, setIsFieldInvalid] = useState<boolean>(false)

  const handleCreateUser = async () => {
    await challengeApi
      .createUser({name, email, phone, site})
      .then(() => {
        handleAddUser(name, email, phone, site)
        setShowModal(false)
        setIsFieldInvalid(false)
      })
      .catch(error => console.log(error))
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
    } else {
      setIsFieldInvalid(true)
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
      heightMobile={isFieldInvalid ? '470px' : '440px'}
      heightDeskotop='355px'
      widthMobile='83%'
    >
      <PageTitle title='Incluir novo usuário' />
      {isFieldInvalid && 
        <RequiredMessage>* Campo obrigatório</RequiredMessage>
      }
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

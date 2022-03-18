import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';
import TextFieldComponent from './TextFieldComponent';

interface IAddNewModal {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputsContainer = styled.div`
  display: flex;
  margin: 15px 50px 15px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 15px;
`;

const AddNewModal: React.FC<IAddNewModal> = ({setShowModal}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')


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
          label='Telefone' type='number' 
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
        />
        <Button
          title='Cancelar'
          style={{backgroundColor: '#E5E5E5', color: '#34423D', width: '100px'}}
          
        />
      </ButtonsContainer>
    </ModalWrapper>
  )
}

export default AddNewModal;

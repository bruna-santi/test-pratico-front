import { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContextProvider';
import DetailsData from './DetailsData';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

interface IUserDetailsModal {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDetailsModal: React.FC<IUserDetailsModal> = ({setShowModal}) => {
  const {selectedUser} = useContext(ApplicationContext)

  return (
    <ModalWrapper setShowModal={setShowModal} style={{width: '500px'}}>
      <PageTitle title='Detalhes' />
      <DetailsData label='Nome' data={selectedUser.name} />
      <DetailsData label='Email' data={selectedUser.email} />
      <DetailsData label='Telefone' data={selectedUser.phone} />
      <DetailsData label='Site' data={selectedUser.website} />
    </ModalWrapper>
  )
}

export default UserDetailsModal;

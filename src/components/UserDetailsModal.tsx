import { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContextProvider';
import DetailsData from './DetailsData';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

const UserDetailsModal = () => {
  const {selectedUser, setShowUserDetailsModal} = useContext(ApplicationContext)

  return (
    <ModalWrapper
      setShowModal={setShowUserDetailsModal}
      widthDesktop='28%'
      heightMobile='310px'
    >
      <PageTitle title='Detalhes' />
      <DetailsData label='Nome' data={selectedUser.name} />
      <DetailsData label='Email' data={selectedUser.email} />
      <DetailsData label='Telefone' data={selectedUser.phone} />
      <DetailsData label='Site' data={selectedUser.website} />
    </ModalWrapper>
  )
}

export default UserDetailsModal;

import styled from 'styled-components';
import DetailsData from './DetailsData';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

interface IUser {
  data?: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDetailsModal: React.FC<IUser> = ({data, setShowModal}) => {

  return (
    <ModalWrapper setShowModal={setShowModal}>
        <PageTitle title='Detalhes' />
        <DetailsData label='Nome' data={data.name} />
        <DetailsData label='Email' data={data.email} />
        <DetailsData label='Telefone' data={data.phone} />
        <DetailsData label='Site' data={data.website} />
    </ModalWrapper>
  )
}

export default UserDetailsModal;

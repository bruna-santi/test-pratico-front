import DetailsData from './DetailsData';
import ModalWrapper from './ModalWrapper';
import PageTitle from './PageTitle';

interface IUserDetailsModal {
  data?: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDetailsModal: React.FC<IUserDetailsModal> = ({data, setShowModal}) => {

  return (
    <ModalWrapper setShowModal={setShowModal} style={{width: '500px'}}>
        <PageTitle title='Detalhes' />
        <DetailsData label='Nome' data={data.name} />
        <DetailsData label='Email' data={data.email} />
        <DetailsData label='Telefone' data={data.phone} />
        <DetailsData label='Site' data={data.website} />
    </ModalWrapper>
  )
}

export default UserDetailsModal;

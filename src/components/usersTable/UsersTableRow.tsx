import { useContext } from 'react';
import styled from 'styled-components';
import { ApplicationContext } from '../../context/ApplicationContextProvider';
import { IUser } from '../../interfaces';
import Button from '../Button';

interface ITableBodyRow {
  data: IUser;
  handleDeleteUser: (userId: number) => void;
}

interface ITd {
  isPadding: boolean;
}

const TrBody = styled.tr`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #EAEFED;

  .nameCell {
    font-weight: 600;
  }

  .emailCell {
    justify-content: space-between;
  }

  .buttonCell {
    justify-content: flex-end;
  }
`;

const Td = styled.td<ITd>`
  position: relative;
  display: flex;
  align-items: center;
  width: 33%;
  height: 65px;
  padding-left: ${(props) => props.isPadding === true ? '12px' : 0};
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  cursor: pointer;
  word-break: break-all;
  -webkit-tap-highlight-color: transparent;
`;

const UsersTableRow: React.FC<ITableBodyRow> = ({data}) => {
  const {
    setSelectedUser,
    setShowUserDetailsModal,
    setShowDeleteUserModal,
    showDeleteUserModal,
  } = useContext(ApplicationContext)
  
  const handleShowUserDetail = () => {
    setShowUserDetailsModal(true)
    setSelectedUser(data)
  }

  const handleDelete = () => {
    setSelectedUser(data)
    setShowDeleteUserModal(!showDeleteUserModal)
  }

  return (
    <>
      <TrBody key={data.id}>
        <Td className='nameCell' onClick={() => handleShowUserDetail()} isPadding>{data.name}</Td>
        <Td className='emailCell' onClick={() => handleShowUserDetail()} isPadding>{data.email}</Td>
        <Td className='buttonCell' isPadding={false}>
          <Button
            title='Excluir'
            style={{backgroundColor: '#D32F2F'}}
            handleDelete={handleDelete}
          />
        </Td>
      </TrBody>
    </>
  )
}

export default UsersTableRow;

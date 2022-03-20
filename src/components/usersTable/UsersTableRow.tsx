import { useContext } from 'react';
import styled from 'styled-components';
import { ApplicationContext } from '../../context/ApplicationContextProvider';
import { IUser } from '../../interfaces';
import Button from '../Button';

interface ITableBodyRow {
  data: IUser;
  handleDeleteUser: (userId: number) => void;
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
    margin-right: 12px;
  }

  .buttonCell {
    justify-content: flex-end;
  }
`;

const Td = styled.td`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 65px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  cursor: pointer;
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
        <Td className='nameCell' onClick={() => handleShowUserDetail()}>{data.name}</Td>
        <Td className='emailCell' onClick={() => handleShowUserDetail()}>{data.email}</Td>
        <Td className='buttonCell'>
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

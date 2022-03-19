import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import DeleteUserModal from '../DeleteUserModal';
import UserDetailsModal from '../UserDetailsModal';
// import AgentModal from '../AgentModal';
// import ThreeDotsIcon from '../ThreeDotsIcon';
// import { IStatus } from '../../src/interfaces';

interface ITableBodyRow {
  data: any;
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

const UsersTableRow: React.FC<ITableBodyRow> = ({ data, handleDeleteUser }) => {
  
  const [showUserDetailsModal, setShowUserDetailsModal] = useState<boolean>(false)
  const [showDeleteUserModal, setShowDeleteUserModal] = useState<boolean>(false)

  
  return (
    <>
      <TrBody key={data.id}>
        <Td className='nameCell' onClick={() => setShowUserDetailsModal(true)}>{data.name}</Td>
        <Td className='emailCell' onClick={() => setShowUserDetailsModal(true)}>{data.email}</Td>
        <Td className='buttonCell'>
          <Button
            title='Excluir'
            style={{backgroundColor: '#D32F2F'}}
            setShowModal={setShowDeleteUserModal}
            showModal={showDeleteUserModal}
          />
        </Td>
      </TrBody>
      {showUserDetailsModal && 
        <UserDetailsModal
          setShowModal={setShowUserDetailsModal}
          data={data}
        />
      }
      {showDeleteUserModal &&
        <DeleteUserModal
          setShowModal={setShowDeleteUserModal}
          showModal={showDeleteUserModal}
          userId={data.id}
          handleDeleteUser={handleDeleteUser}
        />
      }
    </>
  )
}

export default UsersTableRow;

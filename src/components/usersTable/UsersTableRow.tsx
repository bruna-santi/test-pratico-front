import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import UserDetailsModal from '../UserDetailsModal';
// import AgentModal from '../AgentModal';
// import ThreeDotsIcon from '../ThreeDotsIcon';
// import { IStatus } from '../../src/interfaces';

interface ITableBodyRow {
  data: any;
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


const ModalContainer = styled.div`
  position: relative;
`

const UsersTableRow: React.FC<ITableBodyRow> = ({ data }) => {
  
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false)
  
  // const urlAgentDetails = `/agents/${agent.agent_id}`

  return (
    <>
      <TrBody key={data.id} onClick={() => setShowUserDetailsModal(true)}>
        <Td className='nameCell'>{data.name}</Td>
        <Td className='emailCell'>
          {data.email}
          <Button
            title='Excluir'
            style={{backgroundColor: '#D32F2F'}}
          />
        </Td>
      </TrBody>
      {showUserDetailsModal && 
        <UserDetailsModal
          setShowModal={setShowUserDetailsModal}
          data={data}
          // userId={data.id}
        />
      }
    </>
  )
}

export default UsersTableRow;

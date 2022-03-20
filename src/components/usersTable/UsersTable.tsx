import styled from 'styled-components';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UsersTableHead';
import { IUser } from '../../interfaces';
 
interface IUsersTable {
  bodyData: IUser[];
  handleDeleteUser: (userId: number) => void;
}

const Table = styled.table`
  width: 100%;
`;

const Thead = styled.thead`
  width: 100%;
`;

const Tbody = styled.tbody`
  width: 100%;
`;

const UsersTable: React.FC<IUsersTable> = ({ bodyData, handleDeleteUser }) => {
  return (
    <Table>
      <Thead>
        <UsersTableHead />
      </Thead>
      <Tbody>
        {bodyData.map((data: any) => {
          return (
            <UsersTableRow data={data} key={data.id} handleDeleteUser={handleDeleteUser}/>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default UsersTable;

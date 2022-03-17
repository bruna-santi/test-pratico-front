import styled from 'styled-components';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UsersTableHead';

interface IUsersTable {
  bodyData?: any;
  headerData?: any;
  deleteUser?: any;
}

const Table = styled.table`
  width: 90%;
`;

const Thead = styled.thead`
  width: 100%;
`;

const Tbody = styled.tbody`
  width: 100%;
`;

const UsersTable: React.FC<IUsersTable> = ({ bodyData, headerData, deleteUser }) => {
  return (
    <Table>
      <Thead>
        <UsersTableHead headerData={headerData} />
      </Thead>
      <Tbody>
        {bodyData.map((data: any) => {
          return (
            <UsersTableRow data={data} key={data.id}/>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default UsersTable;

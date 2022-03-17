import styled from 'styled-components';

interface IUsersTableHead {
  headerData: any;
}

const TrHead = styled.tr`
  display: flex;
  width: 100%;
  border: 1px solid #CAD6D1;
  /* background-color: #EAEFED; */
  background-color: #E5E5E5;
  border-radius: 8px 8px 0px 0px;
`;

const Th = styled.th`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;
  height: 50px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #587169;
`;

const UsersTableHead: React.FC<IUsersTableHead> = () => {
  return (
    <TrHead>
     <Th>Nome</Th>
     <Th>Email</Th>
    </TrHead>
  )
}

export default UsersTableHead;

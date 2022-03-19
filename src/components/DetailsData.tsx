import styled from 'styled-components';

interface IDetailsData {
  label: string;
  data: string;
}

const Container = styled.div`
  display: flex;
  color: #587169;
`;

const Label = styled.p`
  font-weight: 600;
`;

const Data = styled.p`
  margin-left: 16px;
`;

const DetailsData: React.FC<IDetailsData> = ({label, data}) => {
  return (
    <Container>
      <Label>{`${label}: `}</Label>
      <Data>{data}</Data>
    </Container>
  )
}

export default DetailsData;

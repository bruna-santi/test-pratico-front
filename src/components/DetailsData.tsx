import styled from 'styled-components';

interface IDetailsData {
  label: string;
  data: string;
}

const Container = styled.div``;

const Label = styled.span``;

const Data = styled.span``;


const DetailsData: React.FC<IDetailsData> = ({label, data}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Data>{data}</Data>
    </Container>
  )
}

export default DetailsData;

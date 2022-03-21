import styled from 'styled-components';

interface IPageTitle {
  title: string;
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #34423D;
  margin: 0 0 24px 0;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const PageTitle: React.FC<IPageTitle> = ({title}) => {
  return (
    <Title>{title}</Title>
  )
}

export default PageTitle;

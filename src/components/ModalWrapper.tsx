import styled from 'styled-components';

interface IModalWrapper {
  children: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(8, 8, 17, 0.5);
`;

const ModalWrapper: React.FC<IModalWrapper> = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default ModalWrapper;

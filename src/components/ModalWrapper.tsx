import styled from 'styled-components';
import ExitModalIcon from './ExitModalIcon';

interface IModalWrapper {
  children: any;
  style?: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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
    padding: 0 20px;
    background-color: rgba(8, 8, 17, 0.1);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px;
    width: 550px;
    height: 330px;
    background-color: white;
    border-radius: 10px;
`;

const ModalWrapper: React.FC<IModalWrapper> = ({children, style, setShowModal}) => {
  return (
    <Container>
      <Content style={style}>
      <ExitModalIcon setShowModal={setShowModal} style={{alignSelf: 'flex-end'}}/>
        {children}
      </Content>
    </Container>
  )
}

export default ModalWrapper;

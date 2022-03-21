import styled from 'styled-components';
import ExitModalIcon from './ExitModalIcon';

interface IModalWrapper {
  children: any;
  style?: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  heightMobile?: string;
  heightDeskotop?: string;
  widthMobile?: string;
  widthDesktop?: string;
}

interface IContent {
  heightMobile?: string;
  heightDeskotop?: string;
  widthMobile?: string;
  widthDesktop?: string;
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

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
`;

const Content = styled.div<IContent>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.widthDesktop ? props.widthDesktop: '30%'};
    height: ${(props) => props.heightDeskotop ? props.heightDeskotop : '330px'};
    background-color: white;
    padding: 28px;
    border-radius: 10px;

    @media only screen and (max-width: 1200px) {
      width: ${(props) => props.widthMobile ? props.widthMobile : '83%'};
      height: ${(props) => props.heightMobile ? props.heightMobile : '330px'};
      padding: 20px;
    }

    @media only screen and (max-width: 600px) {
      width: 83%;
      height: ${(props) => props.heightMobile ? props.heightMobile : '330px'};
      padding: 20px;
    }
`;

const ModalWrapper: React.FC<IModalWrapper> = ({
  children,
  style,
  setShowModal,
  heightMobile,
  heightDeskotop,
  widthMobile,
  widthDesktop
}) => {
  return (
    <Container>
      <Content
        style={style}
        heightMobile={heightMobile}
        heightDeskotop={heightDeskotop}
        widthMobile={widthMobile}
        widthDesktop={widthDesktop}
      >
      <ExitModalIcon setShowModal={setShowModal} style={{alignSelf: 'flex-end', marginBottom: '10px'}}/>
        {children}
      </Content>
    </Container>
  )
}

export default ModalWrapper;

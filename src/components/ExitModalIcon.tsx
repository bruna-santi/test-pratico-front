import styled from 'styled-components';

interface IExitModalIcon {
    style?: any;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconContainer = styled.span`
    display: flex;
    align-items: center;
`;

const ExitModalIcon: React.FC<IExitModalIcon> = ({style, setShowModal}) => {
  return (
    <IconContainer style={style} onClick={() => setShowModal(false)} >
      <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13.7742 13.7742" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 13.7742L13.7742 0.999976" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </IconContainer>
  )
}

export default ExitModalIcon;

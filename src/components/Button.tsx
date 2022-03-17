import styled from 'styled-components';

interface IButton {
  title: any;
  style?: any;
}

const Btn = styled.button`
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  height: 36px;
  width: 80px;
  color: #FFFFFF;
  border-radius: 4px;
`;

const Button: React.FC<IButton> = ({title, style}) => {
  return (
    <Btn style={style}>{title}</Btn>
  )
}

export default Button;
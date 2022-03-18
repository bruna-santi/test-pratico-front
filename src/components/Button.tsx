import styled from 'styled-components';

interface IButton {
  title: string;
  style?: any;
  onClick?: any;
}

const Btn = styled.button`
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 36px;
  width: 80px;
  color: #FFFFFF;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

const Button: React.FC<IButton> = ({title, style, onClick}) => {
  return (
    <Btn style={style} onClick={onClick}>{title}</Btn>
  )
}

export default Button;
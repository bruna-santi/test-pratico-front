import styled from 'styled-components';

interface IButton {
  title: string;
  style?: any;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave?: () => void;
  handleDelete?: () => void;
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

const Button: React.FC<IButton> = ({
  title,
  style,
  showModal,
  setShowModal,
  handleSave,
  handleDelete,
}) => {
  const handleClick = () => {
    if(setShowModal) {
      setShowModal(!showModal)
    } else if(handleSave) {
      handleSave()
    } else if(handleDelete) {
      handleDelete()
    }
  }

  return (
    <Btn style={style} onClick={handleClick}>{title}</Btn>
  )
}

export default Button;
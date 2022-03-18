import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

interface ITextFieldComponent {
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const Input = styled(TextField)`
  margin: 0 50px 0 0;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const TextFieldComponent: React.FC<ITextFieldComponent> = ({label, type, value, placeholder, setData}) => {
  return (
    <Input
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setData(e.target.value)}
    />
  )
}

export default TextFieldComponent;

import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

interface ITextFieldComponent {
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
}

const Input = styled(TextField)`
  width: 48%;
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const TextFieldComponent: React.FC<ITextFieldComponent> = ({
  label,
  type,
  value,
  placeholder,
  setData,
  isError,
}) => {
  
  return (
    <Input
      label={label}
      variant='outlined'
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setData(e.target.value)}
      error={isError}
      required
    />
  )
}

export default TextFieldComponent;

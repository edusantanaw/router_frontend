import { useState } from "react";
import TextField from "../textField";
import { SelectContainer } from "./style";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  title: string;
  $w?: string;
  handleChange: (value: number) => void;
}

const Select = ({ options, title, handleChange, $w, ...rest }: Props) => {
  const [selected, setSelected] = useState(rest.value ?? options[0]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function handleSelect(index: number) {
    handleChange(index);
    setSelected(options[index]);
    setShowOptions(false);
  }

  return (
    <SelectContainer $w={$w}>
      <TextField
        onClick={() => setShowOptions(!showOptions)}
        value={selected}
        title={title}
        $w={$w}
        onChange={() => null}
        {...rest}
      />
      {showOptions && (
        <ul className="options">
          {options.map((e, index) => (
            <li key={e} onClick={() => handleSelect(index)}>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}
    </SelectContainer>
  );
};

export default Select;

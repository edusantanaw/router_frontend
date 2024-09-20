import { useState } from "react";
import TextField from "../textField";
import { SelectContainer } from "./style";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: { value: string; identifier: string }[];
  title: string;
  $w?: string;
  handleChange: (value: string) => void;
  selecteds: string[];
}

export function MultSelect({
  options,
  title,
  handleChange,
  selecteds,
  $w,
  ...rest
}: Props) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function handleSelect(id: string) {
    handleChange(id);
  }

  function getSelecteds() {
    const result = options.filter((e) => selecteds.includes(e.identifier));
    return result.map((e) => e.value).join(", ");
  }

  return (
    <SelectContainer $w={$w}>
      <TextField
        onClick={() => setShowOptions(!showOptions)}
        value={getSelecteds()}
        title={title}
        $w={$w}
        onChange={() => null}
        {...rest}
      />
      {showOptions && (
        <ul className="options">
          {options.map((e) => (
            <li
              className={selecteds.includes(e.identifier) ? "selected" : ""}
              key={e.identifier}
              onClick={() => handleSelect(e.identifier)}
            >
              <span>{e.value}</span>
            </li>
          ))}
        </ul>
      )}
    </SelectContainer>
  );
}

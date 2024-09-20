import React from "react";
import { FieldTitle, Input, TextFieldContainer } from "./style";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  $w?: string;
  title: string;
}

const TextField = ({ title, $w, ...rest }: Props) => {
  return (
    <TextFieldContainer $w={$w}>
      <FieldTitle htmlFor={rest.name}>{title}</FieldTitle>
      <Input id={rest.name} {...rest} $w={$w} />
    </TextFieldContainer>
  );
};

export default TextField;

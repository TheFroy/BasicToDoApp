import { HTMLProps } from "react";
import { CustomButton } from "./Button.styles";

export const Button = ({ children, onClick }: HTMLProps<HTMLButtonElement>) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

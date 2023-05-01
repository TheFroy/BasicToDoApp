import { HTMLProps } from "react";
import { CustomButton } from "./Button.styles";
import { useTheme } from "@emotion/react";

export const Button = ({ children, onClick }: HTMLProps<HTMLButtonElement>) => {
  const theme = useTheme();
  return (
    <CustomButton theme={theme} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

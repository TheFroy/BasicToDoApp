import styled from "@emotion/styled";
import { Theme } from "../../types/theme";

export const CustomButton = styled.button(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "white",
  border: "none",
  outline: "none",
  background: theme.background,
  borderRadius: "8px",
  padding: "7px",
  fontFamily: "Lato, sans-serif !important",
  fontSize: "16px",
}));

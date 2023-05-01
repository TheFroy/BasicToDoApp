import styled from "@emotion/styled";
import { Theme } from "../../types/theme";

export const MainContainer = styled.div(({ theme }: { theme: Theme }) => ({
  width: "90%",
  maxWidth: "430px",
  maxHeight: "70%",
  // overflow: "hidden",
  height: "max-content",
  margin: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  backgroundColor: theme.pallete?.light,
  "& section": {
    padding: "25px",
  },
}));

export const TopSection = styled.section(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.text}`,
  paddingBottom: "0 !important",
}));

export const BottomSection = styled.section({
  maxHeight: "40vh",
  overflowY: "auto",
  paddingTop: "5px !important",
  "& :last-child": {
    borderBottom: "none",
  },
});

export const DarkmodeButton = styled.button(({ theme }: { theme: Theme }) => ({
  fontFamily: "Lato, sans-serif !important",
  background: theme.pallete?.light,
  color: theme.text,
  border: "none",
  outline: "none",
  padding: "8px",
  borderRadius: "5px",
  position: "absolute",
  cursor: "pointer",
  top: "-40px",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

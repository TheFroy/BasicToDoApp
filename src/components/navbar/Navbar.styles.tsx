import styled from "@emotion/styled";
import { Theme } from "../../types/theme";

export const NavContainer = styled.div(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: "100%",
  padding: "10px 0",
  "& h3": {
    cursor: "pointer !important",
    padding: "none",
  },
  "& .active": {
    color: theme.pallete?.primary,
  },
}));

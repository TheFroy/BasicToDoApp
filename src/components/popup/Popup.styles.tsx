import styled from "@emotion/styled";
import { Theme } from "../../types/theme";

export const PopupContainer = styled.div(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "99",
  backgroundColor: theme.background,
  boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
  borderRadius: "6px",
  width: "max-content",
}));

export const PopupItem = styled.div({
  cursor: "pointer",
  padding: "5px 8px",
  "& img": {
    width: "12px",
    marginRight: "5px",
  },
});

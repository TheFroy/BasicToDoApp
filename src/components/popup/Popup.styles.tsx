import styled from "@emotion/styled";

export const PopupContainer = styled.div({
  position: "absolute",
  right: "0",
  top: "0",
  backgroundColor: "white",
  boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
  borderRadius: "6px",
  width: "max-content",
  // padding: "5px 8px",
});

export const PopupItem = styled.div({
  cursor: "pointer",
  padding: "5px 8px",
  "& img": {
    width: "12px",
    marginRight: "5px",
  },
});

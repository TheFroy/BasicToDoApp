import styled from "@emotion/styled";

export const NavContainer = styled.div({
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
    color: " #f12711",
  },
});

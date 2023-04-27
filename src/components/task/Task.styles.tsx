import styled from "@emotion/styled";

export const TaskContainer = styled.div({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  padding: "20px 10px",
  borderBottom: "1px solid #D2D2D2",
  "& :last-child": {
    marginLeft: "auto",
    cursor: "pointer",
  },
  "& img": {
    maxWidth: "25px",
    cursor: "pointer",
  },
});

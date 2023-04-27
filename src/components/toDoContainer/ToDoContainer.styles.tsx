import styled from "@emotion/styled";

export const MainContainer = styled.div({
  width: "90%",
  maxWidth: "430px",
  height: "max-content",
  margin: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  backgroundColor: "white",
  "& section": {
    padding: "25px",
  },
});

export const TopSection = styled.section({
  borderBottom: "1px solid #D2D2D2",
  paddingBottom: "0 !important",
});

export const BottomSection = styled.section({
  paddingTop: "5px !important",
  "& :last-child": {
    borderBottom: "none",
  },
});

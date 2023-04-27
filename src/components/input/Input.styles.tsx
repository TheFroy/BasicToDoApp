import styled from "@emotion/styled";

export const InputContainer = styled.div({
  "& img": {
    position: "absolute",
  },
  width: "100%",
  display: "flex",
  alignItems: "center",
});

export const Icon = styled.img({
  maxWidth: "20px",
  maxHeight: "20px",
  paddingLeft: "15px",
});

export const CustomInput = styled.input({
  width: "100%",
  height: "40px",
  paddingLeft: "45px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  "::placeholder": {
    color: "#D2D2D2",
  },
  "&:focus": {
    outline: "none",
    border: "2px solid #f12711",
  },
});

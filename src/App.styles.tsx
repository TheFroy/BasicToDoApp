import styled from "@emotion/styled";
import { Theme } from "./types/theme";

export const MainContainer = styled.div(({ theme }: { theme: Theme }) => ({
  background: theme.background,
  color: `${theme.text} !important`,
  margin: "-8px",
  padding: 0,
  height: "100vh",
  width: "100vw",
  position: "relative",
  img: {
    filter: theme.imgFilter,
  },
  "& *": {
    transitionDuration: ".5s",
    transitionProperty: "background",
  },
}));

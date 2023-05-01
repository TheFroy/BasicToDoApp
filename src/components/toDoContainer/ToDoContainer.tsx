import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  BottomSection,
  MainContainer,
  TopSection,
  DarkmodeButton,
} from "./ToDoContainer.styles";
import { Input } from "../input/Input";
import { Navbar } from "../navbar/Navbar";
import { TaskContainer } from "../taskContainer/TaskContainer";
import { filters } from "../../utils/filterEnums";

export const ToDoContainer = ({ isDark, setIsDark }: any) => {
  const [filter, setFilter] = useState(filters.ALL);
  const theme = useTheme();
  return (
    <MainContainer theme={theme}>
      <DarkmodeButton theme={theme} onClick={() => setIsDark(!isDark)}>
        Change to {isDark ? "light" : "dark"} mode
      </DarkmodeButton>
      <TopSection theme={theme}>
        <Input />
        <Navbar filter={filter} setFilter={setFilter} />
      </TopSection>
      <BottomSection>
        <TaskContainer filter={filter} />
      </BottomSection>
    </MainContainer>
  );
};

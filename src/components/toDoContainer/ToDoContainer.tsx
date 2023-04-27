import {
  BottomSection,
  MainContainer,
  TopSection,
} from "./ToDoContainer.styles";
import { Input } from "../input/Input";
import { Navbar } from "../navbar/Navbar";
import { TaskContainer } from "../taskContainer/TaskContainer";
import { useState } from "react";
import { filters } from "../../utils/filterEnums";

export const ToDoContainer = () => {
  const [filter, setFilter] = useState(filters.ALL);
  return (
    <MainContainer>
      <TopSection>
        <Input />
        <Navbar filter={filter} setFilter={setFilter} />
      </TopSection>
      <BottomSection>
        <TaskContainer filter={filter} />
      </BottomSection>
    </MainContainer>
  );
};

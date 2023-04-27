import {
  BottomSection,
  MainContainer,
  TopSection,
} from "./ToDoContainer.styles";
import { Input } from "../input/Input";
import { Navbar } from "../navbar/Navbar";
import { TaskContainer } from "../taskContainer/TaskContainer";

export const ToDoContainer = () => {
  return (
    <MainContainer>
      <TopSection>
        <Input />
        <Navbar />
      </TopSection>
      <BottomSection>
        <TaskContainer />
      </BottomSection>
    </MainContainer>
  );
};

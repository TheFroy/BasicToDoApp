import { useState } from "react";
import { ToDoContainer } from "./components/toDoContainer/ToDoContainer";

import { TaskContext } from "./config/context";
import { Task } from "./types/task";
import { useTheme } from "@emotion/react";
import { MainContainer } from "./App.styles";

function App({ isDark, setIsDark }: any) {
  const theme = useTheme();
  const [taskList, setTaskList] = useState<Array<Task>>([]);
  const contextValue = { taskList, setTaskList };
  return (
    <TaskContext.Provider value={contextValue}>
      <MainContainer theme={theme}>
        <ToDoContainer isDark={isDark} setIsDark={setIsDark} />
      </MainContainer>
    </TaskContext.Provider>
  );
}

export default App;

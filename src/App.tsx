import { useState } from "react";
import { ToDoContainer } from "./components/toDoContainer/ToDoContainer";

import { TaskContext } from "./config/context";
import { Task } from "./types/task";

function App() {
  const [taskList, setTaskList] = useState<Array<Task>>([]);
  const contextValue = { taskList, setTaskList };
  return (
    <TaskContext.Provider value={contextValue}>
      <ToDoContainer />
    </TaskContext.Provider>
  );
}

export default App;

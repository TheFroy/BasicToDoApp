import { useContext } from "react";
import { Task } from "../task/Task";
import { MainContainer } from "./TaskContainer.styles";
import { TaskContext } from "../../utils/context";

export const TaskContainer = () => {
  const { taskList } = useContext(TaskContext);
  return (
    <MainContainer>
      {taskList?.length > 0 ? (
        <>
          {taskList.map((task) => (
            <Task key={task.id} title={task.title} completed={task.completed} />
          ))}
        </>
      ) : (
        <div style={{ paddingTop: "10px" }}>You task nothing yet</div>
      )}
    </MainContainer>
  );
};

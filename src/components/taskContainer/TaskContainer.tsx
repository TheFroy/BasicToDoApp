import { useContext } from "react";
import { Task } from "../task/Task";
import { MainContainer } from "./TaskContainer.styles";
import { TaskContext } from "../../utils/context";
import { filters } from "../../utils/filterEnums";

export const TaskContainer = ({ filter }: any) => {
  const { taskList } = useContext(TaskContext);
  return (
    <MainContainer>
      {taskList?.length > 0 ? (
        <>
          {taskList.map((task) => (
            <>
              {filter !== filters.ALL && filter === filters.COMPLETED ? (
                <>
                  {task.completed && (
                    <Task
                      key={task.id}
                      title={task.title}
                      id={task.id}
                      completed={task.completed}
                    />
                  )}
                </>
              ) : (
                <>
                  {!task.completed && (
                    <Task
                      key={task.id}
                      title={task.title}
                      id={task.id}
                      completed={task.completed}
                    />
                  )}
                </>
              )}
            </>
          ))}
        </>
      ) : (
        <div style={{ paddingTop: "10px" }}>You task nothing yet</div>
      )}
    </MainContainer>
  );
};

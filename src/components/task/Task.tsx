import { useState, useRef, useContext } from "react";
import { Task as TaskType } from "../../types/task";
import { TaskContainer } from "./Task.styles";
import checked from "../../assets/checked.png";
import unchecked from "../../assets/unchecked.png";
import dots from "../../assets/dots.png";
import { Popup } from "../popup/Popup";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { TaskContext } from "../../config/context";

export const Task = ({ title, completed, id }: TaskType) => {
  const { taskList, setTaskList } = useContext(TaskContext);
  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useOutsideClick(containerRef, setShowPopup);

  const handleCompleteTask = () => {
    const taskToComplete = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: task.completed ? false : true };
      }
      return task;
    });

    setTaskList(taskToComplete);
  };

  return (
    <TaskContainer>
      <img
        src={completed ? checked : unchecked}
        onClick={handleCompleteTask}
        alt=""
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>

      <div
        ref={containerRef}
        style={{ position: "relative" }}
        onClick={() => setShowPopup(true)}
      >
        <img src={dots} alt="" />
        {showPopup && <Popup taskId={id} />}
      </div>
    </TaskContainer>
  );
};

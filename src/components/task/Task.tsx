import { useState, useRef } from "react";
import { Task as TaskType } from "../../types/task";
import { TaskContainer } from "./Task.styles";
import checked from "../../assets/checked.png";
import unchecked from "../../assets/unchecked.png";
import dots from "../../assets/dots.png";
import { Popup } from "../popup/Popup";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const Task = ({
  title,
  completed,
}: Pick<TaskType, "title" | "completed">) => {
  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  useOutsideClick(containerRef, setShowPopup);

  return (
    <TaskContainer>
      <img src={completed ? checked : unchecked} alt="" />
      <span>{title}</span>

      <div
        ref={containerRef}
        style={{ position: "relative" }}
        onClick={() => setShowPopup(true)}
      >
        <img src={dots} alt="" />
        {showPopup && <Popup />}
      </div>
    </TaskContainer>
  );
};

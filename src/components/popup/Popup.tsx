import { PopupContainer, PopupItem } from "./Popup.styles";
import bin from "../../assets/bin.png";
import editpen from "../../assets/editpen.png";
import { TaskContext } from "../../config/context";
import { useContext } from "react";

export const Popup = ({ taskId }: any) => {
  const { taskList, setTaskList } = useContext(TaskContext);
  const handleDelete = () => {
    setTaskList(taskList.filter((t) => t.id !== taskId));
  };

  return (
    <PopupContainer>
      <PopupItem onClick={handleDelete}>
        <img src={bin} alt="" /> Delete
      </PopupItem>
      <PopupItem>
        <img src={editpen} alt="" /> Edit
      </PopupItem>
    </PopupContainer>
  );
};

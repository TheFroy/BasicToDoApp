import { useContext, useState } from "react";
import inputImg from "../../assets/edit.png";
import { Icon, InputContainer, CustomInput } from "./Input.styles";
import { TaskContext } from "../../utils/context";
import { Task } from "../../types/task";

export const Input = () => {
  const { setTaskList } = useContext(TaskContext);
  const initialState = {
    id: parseInt((Math.random() * 1000).toFixed(3)),
    title: "",
    completed: false,
  };
  const [newTask, setNewTask] = useState<Task>(initialState);
  const handleChange = (e: any) => {
    const { value } = e.target;
    setNewTask({ ...newTask, title: value });
  };

  const handleEnterKey = (e: any) => {
    if (e.key === "Enter") {
      setTaskList((current: any) => [...current, newTask]);
      setNewTask(initialState);
      e.target.value = "";
    }
  };
  return (
    <InputContainer>
      <Icon src={inputImg} alt="" />
      <CustomInput
        type="text"
        placeholder="Add a New Task + Enter"
        onChange={handleChange}
        onKeyDown={handleEnterKey}
      />
    </InputContainer>
  );
};

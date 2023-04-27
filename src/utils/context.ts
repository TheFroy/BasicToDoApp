// context.js
import { createContext } from 'react';
import { Task } from '../types/task';

type ContextType = {
  taskList: Array<Task>,
  setTaskList: any
  // addTask: (title: string, completed: boolean) => void,
  // removeTask: (id: number) => void,
  // updateTask: (id: number, title: string, completed: boolean) => void,
}
export const TaskContext = createContext<ContextType>({
  taskList: [],
  setTaskList: () => {}
  // addTask: (title: string, completed: boolean) => {},
  // removeTask: (id: number) => {},
  // updateTask: (id: number, title: string, completed: boolean) => {},
});

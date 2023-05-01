import { useContext } from "react";
import { NavContainer } from "./Navbar.styles";
import { Button } from "../button/Button";
import { filters } from "../../utils/filterEnums";
import { TaskContext } from "../../config/context";
import { useTheme } from "@emotion/react";

export const Navbar = ({ filter, setFilter }: any) => {
  const { setTaskList } = useContext(TaskContext);
  const theme = useTheme();
  return (
    <NavContainer theme={theme}>
      <h3
        className={filter === filters.ALL ? "active" : ""}
        onClick={() => setFilter(filters.ALL)}
      >
        All
      </h3>
      <h3
        className={filter === filters.PENDING ? "active" : ""}
        onClick={() => setFilter(filters.PENDING)}
      >
        Pending
      </h3>
      <h3
        className={filter === filters.COMPLETED ? "active" : ""}
        onClick={() => setFilter(filters.COMPLETED)}
      >
        Completed
      </h3>
      <Button onClick={() => setTaskList([])}>Clear All</Button>
    </NavContainer>
  );
};

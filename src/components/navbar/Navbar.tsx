import { NavContainer } from "./Navbar.styles";
import { Button } from "../button/Button";
import { filters } from "../../utils/filterEnums";

export const Navbar = ({ filter, setFilter }: any) => {
  return (
    <NavContainer>
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
      <Button>Clear All</Button>
    </NavContainer>
  );
};

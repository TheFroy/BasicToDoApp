import { NavContainer } from "./Navbar.styles";
import { Button } from "../button/Button";

export const Navbar = () => {
  return (
    <NavContainer>
      <h3 className="active">All</h3>
      <h3>Pending</h3>
      <h3>Completed</h3>
      <Button>Clear All</Button>
    </NavContainer>
  );
};

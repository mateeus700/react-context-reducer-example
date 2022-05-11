import React from "react";
import { Link } from "react-router-dom";
import { MenuSection } from "./styled-menu";

const Menu: React.FC = () => {
  return (
    <MenuSection>
      <Link to={"/"}>Navega para /</Link>
      <Link to={"/users"}>Navega para /users</Link>
    </MenuSection>
  );
};

export { Menu };

import { Link } from "react-router-dom";
import { List, MenuTitle, SiderBarContainer } from "./style";

export const Sidebar = () => {
  return (
    <SiderBarContainer>
      <MenuTitle>
        <span>Menu</span>
      </MenuTitle>
      <List>
        <li>
          <Link to="/">
            <p>Clientes</p>
          </Link>
        </li>
        <li>
          <Link to="/router">
            <p>Roteadores</p>
          </Link>
        </li>
      </List>
    </SiderBarContainer>
  );
};

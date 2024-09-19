import { Link } from "react-router-dom";
import { List, SiderBarContainer } from "./style";

export const Sidebar = () => {
  return (
    <SiderBarContainer>
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

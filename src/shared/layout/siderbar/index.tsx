import { Link } from "react-router-dom";
import { List, MenuTitle, SiderBarContainer } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  const showClass = `${showMenu ? " show" : ""}`;

  return (
    <SiderBarContainer>
      <div className="hamburger open">
        {!showMenu && <GiHamburgerMenu onClick={handleShowMenu} />}
      </div>
      <div className={"close" + showClass} onClick={handleShowMenu} />
      <div className={"menu" + showClass}>
        <MenuTitle>
          <GiHamburgerMenu onClick={handleShowMenu} className="hamburger" />
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
      </div>
    </SiderBarContainer>
  );
};

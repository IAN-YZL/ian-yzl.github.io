import React, { useState } from "react";
import styled from "styled-components";

const navItems = ["home", "biography", "contact"];

interface NavItemProps {
  $isActive: boolean;
}

const NavWrapper = styled.ul`
  padding: 0 30px;
`;

const NavItem = styled.li<NavItemProps>`
  list-style-type: none;
  font-size: 18px;
  line-height: 45px;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  margin-bottom: 3px;
  background-color: ${(props) => (props.$isActive ? "#ffcc0d" : undefined)};
  cursor: ${(props) => (props.$isActive ? undefined : "pointer")};
`;

const NavBar: React.FC = () => {
  const [activeKey, setActiveKey] = useState("nav-home");

  return (
    <NavWrapper>
      {navItems.map((item) => {
        const navKey = `nav-${item}`;
        return (
          <NavItem
            $isActive={activeKey === navKey}
            onClick={() => {
              setActiveKey(navKey);
            }}
            key={navKey}
          >
            {item}
          </NavItem>
        );
      })}
    </NavWrapper>
  );
};

export default NavBar;

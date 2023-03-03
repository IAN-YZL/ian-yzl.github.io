import React from "react";
import { LogoWrapper, NavigationWrapper, NavItem } from "./Navigation.styled";
import logo from "../../assets/images/ian-logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const navRoutes = {
  home: "/",
  blog: "/blog",
  projects: "/projects",
  about: "/about",
};

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnclick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pathname: string
  ) => {
    e.preventDefault();
    navigate(pathname);
  };

  return (
    <NavigationWrapper>
      <LogoWrapper src={logo} alt="Logo" />
      {Object.entries(navRoutes).map(([label, route]) => (
        <NavItem
          selected={location.pathname === route}
          key={label}
          onClick={(e) => handleOnclick(e, route)}
        >
          {label.toUpperCase()}
        </NavItem>
      ))}
    </NavigationWrapper>
  );
};

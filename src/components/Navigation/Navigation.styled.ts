import { Button, styled } from "@mui/material";
import { BoxWrapper } from "../styles";

export const NavigationWrapper = styled(BoxWrapper)({
  display: "flex",
  alignItems: "center",
  padding: "0 80px",
  height: 128,
});

export const LogoWrapper = styled("img")({
  height: 32,
  width: 32,
});

export const NavItem = styled(Button)<{ selected: boolean }>(
  ({ selected }) => ({
    marginLeft: 24,
    padding: 0,
    color: selected ? "#2b6bb1" : "#4a5568",
    fontWeight: 600,
    minWidth: 0,
  })
);

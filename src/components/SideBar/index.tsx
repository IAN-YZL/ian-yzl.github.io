import { Divider, Layout } from "antd";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/ian-logo.png";
import NavBar from "./NavBar";
import SideBarFooter from "./SideBarFooter";

const { Header, Content, Footer } = Layout;

const LogoImage = styled.img`
  width: 150px;
  padding-top: 110px;
  margin: 0 auto;
`;

const SideBarLayout = styled(Layout)`
  text-align: center;
  width: 380px;
`;

const SideBarContent = styled(Content)`
  margin: 85px 0;
`;

const SideBarDivider = styled(Divider)`
  height: 4px;
  background-color: black;
`;

const SideBar: React.FC = () => {
  return (
    <SideBarLayout>
      <Header style={{ display: "contents" }}>
        <LogoImage src={Logo} alt="ian-logo" />
      </Header>
      <SideBarContent>
        <NavBar />
      </SideBarContent>
      <SideBarDivider plain />
      <Footer>
        <SideBarFooter />
      </Footer>
    </SideBarLayout>
  );
};

export default SideBar;

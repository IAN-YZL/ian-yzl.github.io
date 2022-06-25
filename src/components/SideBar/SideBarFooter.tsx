import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const SocialWrapper = styled(Row)`
  padding-top: 60px;
  margin-bottom: 10px;
`;

const CopyrightContainer = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 4px;
`;

const SideBarFooter: React.FC = () => {
  const style = { fontSize: "30px" };
  return (
    <>
      <SocialWrapper justify="space-evenly">
        <Col span={3}>
          <LinkedinFilled style={style} />
        </Col>
        <Col span={3}>
          <GithubFilled style={style} />
        </Col>
        <Col span={3}>
          <InstagramFilled style={style} />
        </Col>
      </SocialWrapper>
      <CopyrightContainer>
        <p>
          © 2022 All rights reserved. <br /> <span>IAN YIN.</span>
        </p>
      </CopyrightContainer>
    </>
  );
};

export default SideBarFooter;

import { PermIdentityTwoTone } from "@mui/icons-material";
import React from "react";
import {
  BoxWrapper,
  CardContent,
  CardWrapper,
  EmphasizeText,
  IconWrapper,
  SubHeaderText,
  SubHeaderWrapper,
} from "../../../components/styles";

export const AboutMe = () => {
  return (
    <BoxWrapper>
      <CardWrapper>
        <SubHeaderWrapper>
          <IconWrapper>
            <PermIdentityTwoTone />
          </IconWrapper>
          <SubHeaderText>About Me</SubHeaderText>
        </SubHeaderWrapper>
        <CardContent>
          With a wealth of experience spanning three years in both front-end and
          back-end development, I have honed my skills in using{" "}
          <EmphasizeText>Node.js</EmphasizeText> and{" "}
          <EmphasizeText>React.js</EmphasizeText> to create dynamic and
          responsive web applications.
        </CardContent>
        <CardContent>
          In my coding practices, I am committed to upholding the principles of{" "}
          <EmphasizeText>
            Readability, Maintainability, and Reusability
          </EmphasizeText>
          , ensuring that my code is both effective and easily understandable
          for other developers. Furthermore, I am eager to leverage my expertise
          in React.js to develop robust front-end solutions that adhere to{" "}
          <EmphasizeText>SOLID principles</EmphasizeText>, thereby enhancing the
          overall quality of my work.
        </CardContent>
      </CardWrapper>
    </BoxWrapper>
  );
};

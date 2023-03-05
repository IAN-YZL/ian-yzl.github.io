import { ArrowRightTwoTone, BuildTwoTone } from "@mui/icons-material";
import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import {
  BoxWrapper,
  CardWrapper,
  IconWrapper,
  SubHeaderText,
  SubHeaderWrapper,
} from "../../../components/styles";
import { TechStackCategoryWrapper, TechStackItem } from "./TechStacks.styled";

const techStacks = {
  frontend: [
    "React.js",
    "Next.js",
    "React Native",
    "React router",
    "Redux",
    "Ionic",
    "mobx-state-tree",
    "styled-components",
    "material-ui",
    "Angular",
    "Typescript",
    "Emotion.js",
    "Javascript/ES6",
    "HTML5",
    "CSS3",
    "SASS",
    "SCSS",
    "LESS",
    "JQuery",
    "Responsive web design",
    "Bootstrap",
    "Flexbox",
    "npm/yarn",
    "CSS Module",
    "Webpack",
    "SPA",
    "ESLint",
    "Ant Design",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "Java 14",
    "Python",
    "PHP",
    "C# .NET",
    "KeystoneJS",
  ],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  tools: [
    "Git",
    "Docker",
    "Kubernetes",
    "SVN",
    "Trello",
    "Slack",
    "VS Code",
    "IntelliJ",
    "Pycharm",
    "Visual Studio",
    "JIRA",
    "Github",
    "Sourcetree",
    "Bitbucket",
    "Lens",
    "Postman",
  ],
  api: [
    "Cesium",
    "Mapbox",
    "RESTful API",
    "GraphQL",
    "JWT",
    "Ajax",
    "JSON",
    "Swagger",
  ],
  "data science": [
    "Matlab",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "scikit-learn",
    "Keras",
  ],
  cloud: [
    "AWS EC2",
    "AWS S3",
    "AWS CloudFront",
    "AWS Route 53",
    "Amazon Lambda",
    "Heroku",
    "Google Cloud",
  ],
};

export const TechStacks = () => {
  return (
    <BoxWrapper>
      <CardWrapper>
        <SubHeaderWrapper>
          <IconWrapper>
            <BuildTwoTone />
          </IconWrapper>
          <SubHeaderText>Tech Stacks</SubHeaderText>
        </SubHeaderWrapper>
        <CardContent>
          {Object.entries(techStacks).map(([category, techs]) => (
            <TechStackCategoryWrapper key={category}>
              <ArrowRightTwoTone style={{ color: "#2b6bb1" }} />
              <Box whiteSpace="nowrap" marginRight={"16px"} width="100px">
                {category}
              </Box>
              <Box>
                {techs.map((techItem) => (
                  <TechStackItem label={techItem} key={techItem} />
                ))}
              </Box>
            </TechStackCategoryWrapper>
          ))}
        </CardContent>
      </CardWrapper>
    </BoxWrapper>
  );
};

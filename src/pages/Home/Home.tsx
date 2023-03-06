import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { AboutMe } from "./AboutMe/AboutMe";
import { Intro } from "./Intro/Intro";
import { TechStacks } from "./TechStacks/TeckStacks";
import { Works } from "./Works/Works";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      <AboutMe />
      <TechStacks />
      <Works />
    </>
  );
};

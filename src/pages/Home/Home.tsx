import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { AboutMe } from "./AboutMe/AboutMe";
import { Intro } from "./Intro/Intro";
import { TechStacks } from "./TechStacks/TeckStacks";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      <AboutMe />
      <TechStacks />
    </>
  );
};

import React from "react";
import avatar from "../../../assets/images/avatar.jpg";
import { AvatarWrapper, Description, IntroWrapper } from "./Intro.styled";

const getDiffYear = () => {
  const startTime = new Date("2020-07-01");
  const diff =
    (new Date().getTime() - startTime.getTime()) / 1000 / (60 * 60 * 24);

  return Math.abs(Math.ceil(diff / 365.25));
};

export const Intro = () => {
  const experienceYear = getDiffYear();

  return (
    <IntroWrapper>
      <AvatarWrapper src={avatar} alt="Avatar" />
      <Description>
        {`My name is Ian Yin. I am a seasoned Software Engineer with approximately ${experienceYear} years of industry experience.`}
      </Description>
    </IntroWrapper>
  );
};

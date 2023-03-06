import { WorkTwoTone } from "@mui/icons-material";
import { Box, CardContent, Grid } from "@mui/material";
import React from "react";
import {
  BoxWrapper,
  CardWrapper,
  SubHeaderWrapper,
  IconWrapper,
  SubHeaderText,
} from "../../../components/styles";

export const Works = () => {
  return (
    <BoxWrapper>
      <CardWrapper>
        <SubHeaderWrapper>
          <IconWrapper>
            <WorkTwoTone />
          </IconWrapper>
          <SubHeaderText>Where I'v Worked</SubHeaderText>
        </SubHeaderWrapper>
        <CardContent>
          <Grid container>
            <Grid item xs={3}>
              <Box>Propelleraero</Box>
              <Box>Codafication</Box>
            </Grid>
            <Grid item xs={9}>
              Working Experience
            </Grid>
          </Grid>
        </CardContent>
      </CardWrapper>
    </BoxWrapper>
  );
};

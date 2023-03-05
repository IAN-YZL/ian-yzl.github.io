import { Box, styled } from "@mui/material";
import { BoxWrapper } from "../../../components/styles";

export const AvatarWrapper = styled("img")({
  width: 240,
  height: 240,
  borderRadius: 240,
});

export const IntroWrapper = styled(BoxWrapper)({
  padding: "0 80px 160px 80px",
  marginTop: 64,
  display: "flex",
  alignItems: "center",
});

export const Description = styled(Box)({
  fontSize: "2.25rem",
  fontWeight: 600,
  paddingRight: 16,
});

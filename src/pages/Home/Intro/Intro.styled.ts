import { Box, styled } from "@mui/material";

export const AvatarWrapper = styled("img")({
  width: 240,
  height: 240,
  borderRadius: 240,
});

export const IntroWrapper = styled(Box)({
  padding: "0 80px",
  marginTop: 64,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
});

export const Description = styled(Box)({
  marginTop: 48,
  fontSize: "2.25rem",
  fontWeight: 600,
});

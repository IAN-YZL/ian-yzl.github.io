import { Box, styled, Typography } from "@mui/material";

export const BoxWrapper = styled(Box)({
  maxWidth: 1024,
  margin: "0 auto",
});

export const IconWrapper = styled(Box)({
  width: 48,
  height: 48,
  borderRadius: 48,
  backgroundColor: "#e3ebf2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#2b6bb1",
});

export const SubHeaderWrapper = styled(BoxWrapper)({
  display: "flex",
  alignItems: "center",
  margin: "96px 0 32px",
});

export const SubHeaderText = styled(Typography)({
  marginLeft: 12,
  letterSpacing: ".2em",
  color: "#2b6bb1",
  fontWeight: 600,
});

export const CardContent = styled(Box)({
  fontSize: 20,
  marginBottom: 16,
});

export const CardWrapper = styled(Box)({
  maxWidth: 700,
  margin: "0 auto",
});

export const EmphasizeText = styled("span")({
  color: "#2b6bb1",
  fontWeight: 600,
});

import { styled } from "./";

export const Wrapper = styled("main", {
  background: "$gray900",
  height: "100vh",
  display: "flex",
});
export const Container = styled("div", {
  width: "800px",
  margin: "0 auto",
  height: "100%",
});
export const Orbit = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "200px",
  margin: "10rem auto",
});
export const AsideDestination = styled("button", {
  display: "flex",
  alignItems: "center",
  height: "100%",

  padding: "1rem",
  border: "none",
  background: "transparent",

  transition: "all 0.2s",
  "&:hover": {
    background: "$gray800",
  },
});

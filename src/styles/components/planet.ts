import { keyframes, styled } from "../";

/* const orbit = keyframes({
  "0%": { transform: `rotate(0deg) translateX(100px)` },
  "100%": { transform: "rotate(360deg) translateX(100px)" },
}); */
const createOrbitKeyframes = (distance: number) =>
  keyframes({
    "0%": { transform: `rotate(0deg) translateX(${distance}px)` },
    "100%": { transform: `rotate(360deg) translateX(${distance}px)` },
  });
export const PlanetContainer = styled("button", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "50px",
  height: "50px",

  borderRadius: "100%",
  border: "2px solid white",
  background: "$green300",

  cursor: "pointer",
  variants: {
    orbit: {
      display: {
        animation: ``,
        width: "300px",
        height: "300px",
      },
      xs: {
        animation: `${createOrbitKeyframes(110)} 30s linear infinite`,
      },
      sm: {
        animation: `${createOrbitKeyframes(150)} 55s linear infinite`,
      },
      md: {
        animation: `${createOrbitKeyframes(190)} 50s linear infinite`,
      },
      lg: {
        animation: `${createOrbitKeyframes(260)} 40s linear infinite`,
      },
      xl: {
        animation: `${createOrbitKeyframes(300)} 35s linear infinite`,
      },
      xxl: {
        animation: `${createOrbitKeyframes(400)} 60s linear infinite`,
      },
    },
    color: {
      gray: {
        background: "$gray300",
      },
    },
  },
});

export const StarContainer = styled("div", {
  width: "100px",
  height: "100px",
  borderRadius: "100%",
  border: "3px solid orange",
  background: "red",

  cursor: "pointer",
});

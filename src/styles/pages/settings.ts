import { styled } from "..";

export const SettingsContainer = styled("div", {
  backgroundColor: "$gray800",

  height: "100vh",
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",

  maxWidth: "800px",

  margin: "0 auto",
  padding: "2rem",

  label: {
    color: "$green300",
    fontSize: "$md",
  },
});

export const FormInput = styled("input", {
  backgroundColor: `$gray100`,
  border: "none",
  padding: "1rem",
});
export const FormSubmitBtn = styled("input", {
  maxWidth: "200px",
  width: "100%",

  border: "none",

  color: "white",
  fontWeight: "bold",
  fontSize: "1rem",

  borderRadius: "2rem",
  padding: "1rem",
  marginTop: "2rem",
  alignSelf: "center",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$green500",
  },
  variants: {
    variation: {
      submit: {
        backgroundColor: `$green300`,
      },
      cancel: {
        backgroundColor: `DarkRed`,
      },
    },
  },
});

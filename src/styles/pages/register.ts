import { styled } from "..";

export const FormWrapper = styled("main", {
  height: "calc(100vh - 10rem)",
  minHeight: "30rem",
  maxWidth: `60rem`,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "2rem",
  margin: "5rem auto",
  overflow: "hidden",
  background: "$white",
});
export const FormContainer = styled("div", {
  display: "flex",
  gap: "1rem",

  width: "100%",
  height: "100%",
});
export const SignInContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
  alignItems: "center",
  flex: 1,

  backgroundColor: `$green300`,
  padding: "1rem",

  h2: {
    color: "white",
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  p: {
    textAlign: "center",
    color: "white",
    padding: "0.5rem",
  },
});

export const RegisterForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 2,
  gap: "0.5rem",

  padding: "1rem",

  h2: {
    color: "$green300",
    fontSize: "3rem",
    marginBottom: "2rem",
  },
});
export const RegisterInput = styled("input", {
  backgroundColor: `$gray100`,
  border: "none",
  padding: "1rem",

  maxWidth: "400px",
  width: "100%",
});
export const Btn = styled("button", {
  maxWidth: "200px",
  width: "100%",

  backgroundColor: `$green300`,
  border: "none",

  color: "white",
  fontWeight: "bold",
  fontSize: "1rem",

  borderRadius: "2rem",
  padding: "1rem",
  marginTop: "2rem",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$green500",
  },
  variants: {
    border: {
      noborder: {
        border: "1px solid transparent",
      },
      whiteBorder: {
        border: "1px solid white",
      },
    },
  },
});

import { styled } from "./";

export const Wrapper = styled("main", {
  display: "flex",
});

export const ContactsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",

  height: "100vh",
  flex: 0.3,
  background: "linear-gradient(to top,$green500 0%, $green300 100%)",
});

export const ChatContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,

  height: "100vh",
  backgroundColor: "$gray100",
});

export const ChatArea = styled("div", {
  display: "flex",
  //flexDirection: "column",
  flexDirection: "column-reverse",

  //flex: 1,
  //gap: "0.5rem",

  overflow: "auto",
  overflowY: "auto",

  //padding: "0 1rem 1rem 0",

  p: {
    textAlign: "center",
    margin: "auto 0",
  },
});

export const ChatContentWraper = styled("div", {
  display: "flex",
  flexDirection: "column",

  flex: 1,
  gap: "0.5rem",
  padding: "0 1rem 1rem 0",
});

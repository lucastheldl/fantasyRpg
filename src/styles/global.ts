import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    ":focus": {
      outline: 0,
      boxShadow: "0 0 0 2px $green500",
    },
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray100",
  },

  "body,input,textarea,button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});

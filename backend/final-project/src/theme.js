import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const dark = createMuiTheme({
  palette: {
    primary: {
      main: "#1db954",
    },
    secondary: {
      main: "#222326",
    },
    text: {
      main: "#ffffff",
    }
  }
})

export const light = createMuiTheme({
  palette: {
    primary: {
      main: "#1db954",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      main: "#222326",
    }
  }
})
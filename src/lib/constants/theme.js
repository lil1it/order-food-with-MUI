import { store } from "../../store";

export const lightTheme = {
  palette: {
    primary: {
      main: "#8A2B06",
      light: "#C44817",
      dark: "#481805",
      contrastText: "#fff",
      mealsColor:"#fff"
    },
  },
};

export const darkTheme = {
  palette: {
    primary: {
      main: "rgb(56, 14, 170)",
      light: "rgb(59, 8, 201)",
      dark: "rgb(36, 13, 99)",
      contrastText: "#fff",
       mealsColor:"#4066eb"
    },
  },
};

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode;
  return currentTheme === "light" ? lightTheme : darkTheme;
};

import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";

import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

import styled from "styled-components";
import { useFoods } from "./components/hooks/useFoods";
import SnackBar from "./components/UI/SnackBar";
import { uiActions } from "./store/ui/uiSlice";
import { createTheme, MenuItem, Select, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./lib/constants/theme";


function AppContent() {
  const [isBasketVisible, setBasketVisible] = useState(false);
  const snackbar = useSelector((state) => state.ui.snackbar);
  const themeMode = useSelector((state) => state.ui.themeMode);

  const dispatch = useDispatch();

  const { sortDirection, changesetSortDirection, meals, isLoading, error } =
    useFoods();
  const showBasketHnadler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === "light" ? { ...lightTheme } : { ...darkTheme };
    return createTheme(currentTheme);
  }, [themeMode]);

  const GlobalStyle = createGlobalStyle`
body{
  margin: 0 ;
  background-color: ${theme.palette.primary.main};

}`;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onShowBasket={showBasketHnadler} />

        <Summary />
        <Content>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortDirection}
            label="meals"
            fullWidth
            onChange={(e) => changesetSortDirection(e.target.value)}
          >
            <MenuItem value="ASC">Cheaper</MenuItem>
            <MenuItem value="DESC">more expensive</MenuItem>
          </StyledSelect>
        </Content>
        <Meals meals={meals} isLoading={isLoading} error={error} />
        {isBasketVisible && (
          <Basket onOpen={isBasketVisible} onClose={showBasketHnadler} />
        )}
        <SnackBar
          isOpen={snackbar.isOpen}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={() => {
            dispatch(uiActions.closeSnackbar());
          }}
        />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;

const Content = styled.div`
  margin-top: 101px;
`;

const StyledSelect = styled(Select)(() => ({
  "&": {
    backgroundColor: "white",
  },
}));
// GET /foods

// Headers: { UserID: "your_name"  }
// GET /basket
// Headers: { UserID: "your_name"  }
// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }
// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }

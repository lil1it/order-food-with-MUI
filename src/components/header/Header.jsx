import { styled } from "@mui/system";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styledComponents from "styled-components";
import { getBasket } from "../../store/meals/BasketSlice";
import { uiActions } from "../../store/ui/uiSlice";
import ButtonMui from "../UI/ButtonMui";

import BasketButton from "./BusketButton";

const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const [animationClass, setAnimationClass] = useState("");
  const themeMode = useSelector((state) => state.ui.themeMode);

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const calculateTotalAmount = useCallback(() => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  }, [items]);
  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");

      return () => {
        clearTimeout(id);
      };
    }, 600);
  }, [items]);

  const themeChangeHandler = () => {
    const theme = themeMode === "light" ? "dark" : "light";
    dispatch(uiActions.changeTheme(theme));
  };

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      ></BasketButton>
      <ButtonMui   style={themeMode === "light" ? {backgroundColor: "rgb(42, 0, 159)"  , color: "white" } : {backgroundColor: "#C44817", color: "white" } } onClick={themeChangeHandler}>
        {themeMode === "light" ? "DARK"  : "LIGHT"}
      </ButtonMui>
    </Container>
  );
};

export default memo(Header);

const Container = styled("header")(({ theme }) => ({
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 1,
  height: "101px",
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: " 120px",
  paddingRight: " 120px",
}));

const Logo = styledComponents.p`
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  font-family: Poppins, sans-serif;
`;

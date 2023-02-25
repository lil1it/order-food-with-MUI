import { styled } from "@mui/system";
import { memo } from "react";
import  isStyledComponent  from "styled-components";

import { ReactComponent as BasketIcon } from "../../assets/icons/cart.svg";

const BasketButton = ({ count, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <BasketIcon />
      <StyledTitle>Your cart</StyledTitle>
      <CountStyled id="counter">{count || 0}</CountStyled>
    </StyledButton>
  );
};

export default memo(BasketButton);

const StyledButton = styled("button")(({theme})=>({
  backgroundColor: theme.palette.primary.dark,
  borderRadius: "30px",
  padding: "12px 32px",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "24px",
  color: "white",
  margin: 0,
  border: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems:" center",
  cursor: "pointer",

  '&:hover': {
    backgroundColor: '#2c0d00'
  },
  '&:hover > #counter > ': {
    backgroundColor: '#2c0d00'
  },

  '&.bump' :{
    animation: "bump 300ms ease-out"
  },

 ' @keyframes bump' : {
    '0%' :{
      transform: "scale(1)"
    },
    "10%" :{
      transform: "scale(0.9)"
    },
    "30%": {
      transform: "scale(1.1)"
    },
    "50%": {
      transform: "scale(1.15)"
    },
   " 100%" :{
      transform: "scale(1)"
    },
  }


}))

const StyledTitle = isStyledComponent.span`
  margin-left: 12px;
  margin-right: 24px;
`;
const CountStyled = isStyledComponent.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`;
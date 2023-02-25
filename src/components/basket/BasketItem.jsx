import { memo } from "react";
import styled from "styled-components";

import ButtonMui from "../UI/ButtonMui";

const BasketItem = ({ title, price, amount, dec, incrementAmount }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmount>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmount>
        <CounterContainer>
          <ButtonMui onClick={dec} borderStyle="squared" variant="outlined">
            -
          </ButtonMui>
          <ButtonMui
            onClick={incrementAmount}
            borderStyle="squared"
            variant="outlined"
          >
            +
          </ButtonMui>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default memo(BasketItem);

const Container = styled.div`
  padding: 1.5rem 0;
  width: 100%;
`;

const Title = styled.p`
  margin: 0 0 12px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ad5502;
  margin: 0;
`;

const Amount = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  display: block;
  padding: 4px 10px;
  border: 1px solid gray;
`;

const PriceAndAmount = styled.div`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;
`;

const CounterContainer = styled.div`
  gap: 14px;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

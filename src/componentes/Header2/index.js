import React from "react";
import styled from "styled-components";
import Logo2 from "../../images/logo.png";
import BackgroundImage from "../../images/Vector.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;
`;

const CartInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Restaurantes</Title>
      <Logo src={Logo2} alt="Logo" />
      <CartInfo>0 produto(s) no carrinho</CartInfo>
    </HeaderContainer>
  );
};

export default Header;

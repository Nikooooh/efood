import React, { useState } from "react";
import styled from "styled-components";
import Logo2 from "../../images/logo.png";
import BackgroundImage from "../../images/Vector.png";
import Cart from "../Cart";

const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-left: 103px;
  padding: 200px;
  margin-left: -30px;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  padding: 200px;
  line-height: 21px;
  margin-left: 164px;
  color: #e66767;
`;

const CartInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  padding: 200px;
  color: #e66767;
  margin-left: -69px;
`;
const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Title>Restaurantes</Title>
        <Logo src={Logo2} alt="Logo" />
        <CartInfo onClick={toggleCart}>
          {cartItems.length} produto(s) no carrinho
        </CartInfo>
      </HeaderContainer>
      {cartOpen && <Cart items={cartItems} onClose={closeCart} />}
    </>
  );
};

export default Header;

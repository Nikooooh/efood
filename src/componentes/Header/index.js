import React from "react";
import styled from "styled-components";
import logo from "../../images/logo2.png";

const HeaderContainer = styled.header`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to bottom, #ffebcd, #ffac8c);
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Text = styled.span`
  color: #dc143c;
  font-weight: bold;
  font-size: 29px;
  margin-top: 50px;
`;
const Text2 = styled.span`
  color: #dc143c;
  font-weight: bold;
  font-size: 29px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Text>Viva experiências gastronômicas </Text>
      <Text2>no conforto da sua casa</Text2>
    </HeaderContainer>
  );
};

export default Header;

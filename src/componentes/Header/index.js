import React from "react";
import styled from "styled-components";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to bottom, #ffebcd, #ffac8c);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
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
      <Link to={"/"}>
        <Logo src={logo} alt="Logo" />{" "}
      </Link>
      <Text>Viva experiências gastronômicas </Text>
      <Text2>no conforto da sua casa</Text2>
    </HeaderContainer>
  );
};

export default Header;

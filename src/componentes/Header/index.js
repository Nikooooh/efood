import React from "react";
import styled from "styled-components";
import logo from "../../images/logo2.png";

const HeaderContainer = styled.header`
  background-color: #ffebcd;
  padding: 100px;
  display: flex;
  flex-direction: column; /* Alterado para colocar os elementos em coluna */
  justify-content: space-between; /* Ajustado para espaço entre os elementos */
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Text = styled.span`
  color: #e66767;
  font-weight: bold;
  font-size: 29px;
  margin-top: 50px;
`;
const Text2 = styled.span`
  color: #e66767;
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

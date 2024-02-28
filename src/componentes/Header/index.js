// components/Header.js
import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const HeaderContainer = styled.header`
  background-color: #f7dad9;
  padding: 100px;
  display: flex;
  flex-direction: column; /* Alterado para colocar os elementos em coluna */
  justify-content: space-between; /* Ajustado para espaço entre os elementos */
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const Text = styled.span`
  color: #000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Text>Seu Texto Aqui</Text>
    </HeaderContainer>
  );
};

export default Header;

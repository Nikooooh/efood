// components/Footer.js
import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const FooterContainer = styled.footer`
  background: #ffebd9;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const Icon = styled.img`
  width: 30px;
  height: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo" />
      <SocialIcons>
        <Icon
          src="caminho/para/icon-rede-social-1.png"
          alt="Icone Rede Social 1"
        />
        <Icon
          src="caminho/para/icon-rede-social-2.png"
          alt="Icone Rede Social 2"
        />
        {/* Adicione mais ícones conforme necessário */}
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;

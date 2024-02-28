import React from "react";
import styled from "styled-components";
import logo from "../../images/logo2.png";
import face from "../../images/insta.png";

const FooterContainer = styled.footer`
  background: #ffebd9;
  padding: 40px;
  display: flex;
  flex-direction: column; /* Ajuste para posicionar os elementos verticalmente */
  align-items: center;
  text-align: center; /* Centralizar o texto */
`;

const Text = styled.span`
  color: #e66767;
  font-weight: bold;
  font-size: 17px;
  margin-top: 29px;
`;

const Logo = styled.img`
  width: 220px;
  height: 70px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around; /* Alterado para melhor distribuir os ícones */
  width: 100px;
  margin-top: 14px; /* Adicionado espaçamento entre a logo e os ícones */
`;

const Icon = styled.img`
  width: 25px;
  height: auto;
  padding: 7px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Logo src={logo} alt="Logo" />
      </div>
      <SocialIcons>
        <Icon src={face} alt="Icone Rede Social 1" />
        <Icon src={face} alt="Icone Rede Social 2" />
        <Icon src={face} alt="Icone Rede Social 3" />
      </SocialIcons>
      <Text>Todos Direitos Reservados ao Desenvolvedor Nicolas Trevisan.</Text>
    </FooterContainer>
  );
};

export default Footer;

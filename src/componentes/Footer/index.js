import React from "react";
import styled from "styled-components";
import logo from "../../images/logo2.png";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #ffebd9;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  justify-content: space-around;
  width: 100px;
  margin-top: 14px;
`;

const Icon = styled.a`
  width: 25px;
  height: auto;
  padding: 9px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Logo src={logo} alt="Logo" />
      </div>
      <SocialIcons>
        <Icon>
          <a
            href="https://github.com/Nikooooh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color={"black"} size={32} />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://www.linkedin.com/in/nicolastrevisan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#0e76a8" size={32} />
          </a>
        </Icon>
        <Icon>
          {" "}
          <a
            href="https://www.youtube.com/@NicolasTrevisann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color={"red"} size={32} />
          </a>
        </Icon>
      </SocialIcons>
      <Text>Todos Direitos Reservados ao Desenvolvedor Nicolas Trevisan.</Text>
    </FooterContainer>
  );
};

export default Footer;

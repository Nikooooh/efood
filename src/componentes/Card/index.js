import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 32%; /* Ajustado o tamanho do card */
  margin-bottom: 20px;
  margin-top: 59px;
  padding: 12px;
  border-radius: 1px;
  border: 3px solid #ffa07a; /* Bordas vermelho claro */
`;

const CardImage = styled.img`
  width: 100%; /* Ajustado o tamanho da imagem */
  height: auto;
  border-radius: 5px;
`;

const RestaurantName = styled.h2`
  color: #e66767;
  margin-top: 10px; /* Espaçamento entre o nome do restaurante e a imagem */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.p`
  color: #e66767;
  font-size: 18px;
`;
const FoodType = styled.div`
  position: absolute; /* Define o posicionamento absoluto */
  top: 36px; /* Distância do topo */
  right: 31px; /* Distância da direita */
  background-color: #e66767; /* Cor do retângulo */
  color: white; /* Cor do texto */
  padding: 8px 10px; /* Espaçamento interno */
  border-radius: 1px; /* Borda arredondada */
`;

const Rating = styled.div`
  color: #ffd700; /* cor dourada para a classificação */
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #e66767;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  margin-top: 10px; /* Espaçamento entre o rating e o botão */
`;
const Classificacao = styled.h4`
  color: #e66767;
  margin-left: 350px;
`;

const Card = ({ image, restaurantName, description }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate("/detalhes");
  };
  return (
    <CardContainer>
      <CardImage src={image} alt="Imagem do restaurante" />
      <FoodType>Comida Japonesa</FoodType>
      <RestaurantName>
        {restaurantName}
        <Classificacao>4.6 </Classificacao>
        <Rating>★</Rating>
      </RestaurantName>
      <Description>{description}</Description>
      <Button onClick={handleMoreInfoClick}>Saiba mais</Button>
    </CardContainer>
  );
};

export default Card;

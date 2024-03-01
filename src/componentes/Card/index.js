import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 472px; /* Ajuste na largura do card */
  height: 500px;
  margin-bottom: 20px;
  margin-top: 59px;
  padding: 12px;
  border: 1px solid #ffa07a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%; /* Ajuste na largura da imagem */
  height: 217px;
  object-fit: cover;
  border-radius: 0px;
`;

const RestaurantName = styled.h2`
  color: #e66767;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px; /* Ajuste no tamanho da fonte */
`;

const Description = styled.p`
  color: #e66767;
  font-size: 18px;
`;

const FoodType = styled.div`
  position: absolute;
  top: 30px;
  right: 25px;
  background-color: #e66767;
  color: white;
  padding: 8px 10px;
  border-radius: 0px;
`;

const Rating = styled.div`
  color: #ff8c00;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #e66767;
  color: white;
  border: none;
  padding: 12px 24px; /* Ajuste no espaçamento interno */
  border-radius: 1px;
  cursor: pointer;
  font-size: 16px; /* Ajuste no tamanho da fonte */
`;

const Card = ({ image, restaurantName, description, foodType, rating, id }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="Imagem do restaurante" />
      <FoodType>{foodType}</FoodType>
      <RestaurantName>
        {restaurantName}
        <Rating>{rating} ★</Rating>
      </RestaurantName>
      <Description>{description}</Description>
      <Link to={`/detalhes/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </CardContainer>
  );
};

export default Card;

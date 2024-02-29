import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px; /* Dobrado o tamanho do card */
  height: 800px; /* Dobrado o tamanho do card */
  margin-bottom: 20px;
  margin-top: 59px;
  padding: 12px;
  border-radius: 5px;
  border: 3px solid #ffa07a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: 400px; /* Dobrado o tamanho da imagem */
  object-fit: cover;
  border-radius: 5px;
`;

const RestaurantName = styled.h2`
  color: #e66767;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border-radius: 5px;
`;

const Rating = styled.div`
  color: #ff8c00;
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
`;

const Card = ({ image, restaurantName, description, foodType, rating, id }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="Imagem do restaurante" />
      <FoodType>{foodType}</FoodType>
      <RestaurantName>
        {restaurantName}
        <Rating>★{rating}</Rating>
      </RestaurantName>
      <Description>{description}</Description>
      <Link to={`/detalhes/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </CardContainer>
  );
};

export default Card;

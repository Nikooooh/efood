import React from "react";
import styled from "styled-components";

const RestaurantImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  background: url(${(props) => props.imageUrl}) center/cover;
  margin-top: 0px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column; /* Alteração para orientação de coluna */
  justify-content: center; /* Alinhar os itens verticalmente */
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;
const RestaurantName = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-left: 345px;
  padding-top: 160px;
`;

const FoodType = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-left: 345px;
  opacity: 0.6;
`;

const RestaurantImage = ({ imageUrl, restaurantName, foodType }) => {
  return (
    <RestaurantImageContainer imageUrl={imageUrl}>
      <Overlay>
        <FoodType>{foodType}</FoodType>
        <RestaurantName>{restaurantName}</RestaurantName>
      </Overlay>
    </RestaurantImageContainer>
  );
};

export default RestaurantImage;

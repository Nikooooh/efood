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
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  box-sizing: border-box;
`;

const RestaurantName = styled.h1`
  font-size: 32px;
  color: #fff;
  margin: 0;
  margin-left: 247px;
`;

const RestaurantImage = ({ imageUrl, restaurantName }) => {
  return (
    <RestaurantImageContainer imageUrl={imageUrl}>
      <Overlay>
        <RestaurantName>{restaurantName}</RestaurantName>
      </Overlay>
    </RestaurantImageContainer>
  );
};

export default RestaurantImage;

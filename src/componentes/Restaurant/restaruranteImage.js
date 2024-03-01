import React from "react";
import styled from "styled-components";

const RestaurantImageContainer = styled.div`
  width: 100%;
  height: 480px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-top: 20px;
`;

const RestaurantImage = ({ imageUrl }) => {
  return <RestaurantImageContainer imageUrl={imageUrl} />;
};

export default RestaurantImage;

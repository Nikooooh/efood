import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";

const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  background-color: #fff8f2;
`;

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div>
      <MainSection>
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.capa}
            restaurantName={restaurant.titulo}
            description={restaurant.descricao}
            rating={` ${restaurant.avaliacao}`}
            foodType={restaurant.tipo}
          />
        ))}
      </MainSection>
    </div>
  );
}

export default Home;

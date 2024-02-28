import React from "react";
import styled from "styled-components";
import Card from "../Card";
import logo from "../../images/comida.jpg";

const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  background-color: #fff8f2;
`;

function Home() {
  return (
    <div>
      <MainSection>
        <Card
          image={logo}
          restaurantName="Irasshai Japanase Food"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Irasshai Japanase Food"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Irasshai Japanase Food"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Irasshai Japanase Food"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Irasshai Japanase Food"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Irasshai Japanase Food"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
      </MainSection>
    </div>
  );
}

export default Home;

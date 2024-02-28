// App.js
import React from "react";
import styled from "styled-components";
import Header from "./componentes/Header";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import logo from "./images/comida.jpg";

const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  background-color: #fff8f2;
`;

function App() {
  return (
    <div>
      <Header />
      <MainSection>
        <Card
          image={logo}
          restaurantName="Nome do restaurante 1"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Nome do restaurante 2"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Nome do restaurante 3"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Nome do restaurante 4"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Nome do restaurante 5"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        <Card
          image={logo}
          restaurantName="Nome do restaurante 6"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          rating="★★★★☆"
        />
        {/* Adicione mais cards aqui */}
      </MainSection>
      <Footer />
    </div>
  );
}

export default App;

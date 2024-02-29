import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MenuItemCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 27%;
  margin: 0 15px 30px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const ItemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const AddToCartButton = styled.button`
  background-color: #ff5733;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff714d;
  }
`;

const RestaurantName = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  color: #ff5733;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.cardapio);
        setRestaurantName(data.titulo);
      });
  }, [id]);

  const addToCart = (item) => {
    alert(`Adicionando ${item.nome} ao carrinho`);
  };

  return (
    <div>
      <RestaurantName>{restaurantName}</RestaurantName>
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItemCard key={item.id}>
            <CardImage src={item.foto} alt={item.nome} />
            <CardContent>
              <ItemTitle>{item.nome}</ItemTitle>
              <ItemDescription>{item.descricao}</ItemDescription>
              <ItemPrice>Preço: R$ {item.preco.toFixed(2)}</ItemPrice>
              <AddToCartButton onClick={() => addToCart(item)}>
                Adicionar ao Carrinho
              </AddToCartButton>
            </CardContent>
          </MenuItemCard>
        ))}
      </MenuContainer>
    </div>
  );
};

export default RestaurantDetailsPage;

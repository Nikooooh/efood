import React from "react";
import styled from "styled-components";
import comida from "../../images/comida.jpg";

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
  const menuItems = [
    { id: 1, name: "Hambúrguer", price: 10, image: comida },
    { id: 2, name: "Pizza", price: 12, image: comida },
    { id: 3, name: "Salada", price: 8, image: comida },
    { id: 1, name: "Hambúrguer", price: 10, image: comida },
    { id: 2, name: "Pizza", price: 12, image: comida },
    { id: 3, name: "Salada", price: 8, image: comida },
    { id: 1, name: "Hambúrguer", price: 10, image: comida },
    { id: 2, name: "Pizza", price: 12, image: comida },
    { id: 3, name: "Salada", price: 8, image: comida },
  ];

  const addToCart = (item) => {
    alert(`Adicionando ${item.name} ao carrinho`);
  };

  return (
    <div>
      <RestaurantName>Irasshai Japanase Food - Cardápio </RestaurantName>
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItemCard key={item.id}>
            <CardImage src={item.image} alt={item.name} />
            <CardContent>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>Preço: R$ {item.price.toFixed(2)}</ItemPrice>
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

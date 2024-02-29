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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: linear-gradient(to bottom right, #f0f0f0, #ffa07a);
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  height: 330px;
  display: flex;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 40px;
  color: white;
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

const ImageContainer = styled.div`
  margin-right: 20px;
  margin-top: 30px;
`;

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

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

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
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
              <AddToCartButton onClick={() => openModal(item)}>
                Mais Detalhes
              </AddToCartButton>
            </CardContent>
          </MenuItemCard>
        ))}
      </MenuContainer>
      {selectedItem && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ImageContainer>
              <CardImage src={selectedItem.foto} alt={selectedItem.nome} />
            </ImageContainer>
            <div>
              <ItemTitle>{selectedItem.nome}</ItemTitle>
              <ItemDescription>{selectedItem.descricao}</ItemDescription>
              <ItemPrice>Preço: R$ {selectedItem.preco.toFixed(2)}</ItemPrice>
              <ItemPrice>Serve: {selectedItem.porcao}</ItemPrice>
              <AddToCartButton onClick={() => addToCart(selectedItem)}>
                Adicionar ao Carrinho
              </AddToCartButton>
            </div>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;

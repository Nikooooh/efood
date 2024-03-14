import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Cart from "../Cart";
import Header2 from "../Header2";
import RestaurantImage from "./restaruranteImage";

const MenuItemCard = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 20%;
  background-color: #e66767;
  height: 428px;
  border: 10px solid #e66767;
  margin: 50px 19px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const CardImageModal = styled.img`
  width: 95%;
  height: 305px;
  margin-left: 10px;
  margin-top: 19px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const ItemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: white;
  margin-top: -14px;
  margin-left: -14px;
`;

const ItemTitleModal = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: white;
  margin-top: 14px;
  margin-left: 14px;
`;

const ItemDescription = styled.p`
  font-size: 13.5px;
  margin-bottom: 16px;
  color: white;
  margin-left: -14px;
`;
const ItemDescriptionModal = styled.p`
  font-size: 13.5px;
  margin-bottom: 16px;
  color: white;
  margin-left: 14px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 16px;
`;

const ItemPriceModal = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 16px;
  margin-left: 14px;
`;

const AddToCartButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
  width: 109%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin-left: -15px;
  margin-top: -20px;
  line-height: 16.41px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
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
  background: #e66767;
  padding: 20px;
  width: 50%;
  height: 344px;
  display: flex;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 285px;
  right: 475px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
`;
const AddToCartButtonModal = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
  width: 298px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin-left: 14px;
  line-height: 16.41px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
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
  justify-content: center;
  background-color: #fff8f2;
  padding-bottom: 62px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
`;

const ImageContainerModal = styled.div`
  width: 60%;
  position: relative;
  z-index: 0;
`;

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [restaurantImage, setRestaurantImage] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantFoodType, setRestaurantFoodType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.cardapio);
        setRestaurantName(data.titulo);
        setRestaurantImage(data.capa);
        setRestaurantFoodType(data.tipo);
      });
  }, [id]);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const addToCart = () => {
    setCartItems([...cartItems, selectedItem]);
    setCartOpen(true);
    closeModal();
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <Header2 style={{ zIndex: 1 }} />
      <ImageContainer>
        <RestaurantImage
          imageUrl={restaurantImage}
          restaurantName={restaurantName}
          foodType={restaurantFoodType}
        />{" "}
      </ImageContainer>
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItemCard key={item.id}>
            <CardImage src={item.foto} alt={item.nome} />
            <CardContent>
              <ItemTitle>{item.nome}</ItemTitle>
              <ItemDescription>{item.descricao}</ItemDescription>
              <AddToCartButton onClick={() => openModal(item)}>
                Adicionar ao Carrinho
              </AddToCartButton>
            </CardContent>
          </MenuItemCard>
        ))}
      </MenuContainer>
      {selectedItem && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ImageContainerModal>
              <CardImageModal src={selectedItem.foto} alt={selectedItem.nome} />
            </ImageContainerModal>
            <div>
              <ItemTitleModal>{selectedItem.nome}</ItemTitleModal>
              <ItemDescriptionModal>
                {selectedItem.descricao}
              </ItemDescriptionModal>
              <ItemPriceModal>Serve: {selectedItem.porcao}</ItemPriceModal>
              <AddToCartButtonModal onClick={addToCart}>
                Adicionar ao Carrinho - R$ {selectedItem.preco}0
              </AddToCartButtonModal>
            </div>
          </ModalContent>
        </Modal>
      )}
      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={closeCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default RestaurantDetailsPage;

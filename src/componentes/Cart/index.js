import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
  font-family: Arial, sans-serif;
`;

const ItemContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  font-weight: bold;
  color: #333333;
  font-family: "Roboto", sans-serif;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #666666;
  font-family: "Roboto", sans-serif;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 12px;
`;

const Total = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: #333333;
  font-family: Arial, sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666666;
`;

const RemoveItemButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 80px;
`;

const ContinueButton = styled.button`
  background-color: #ff5733;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #ff714d;
  }
`;

const Cart = ({ items, onClose, removeFromCart }) => {
  const totalPrice = items.reduce((total, item) => total + item.preco, 0);

  return (
    <CartContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Title>Carrinho de Compras</Title>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <Item>
            <ItemImage src={item.foto} alt={item.nome} />
            <ItemDetails>
              <ItemName>{item.nome}</ItemName>
              <ItemPrice>Preço: R$ {item.preco.toFixed(2)}</ItemPrice>
            </ItemDetails>
            <RemoveItemButton onClick={() => removeFromCart(index)}>
              <FaTrash color="#ff5733" />
            </RemoveItemButton>
          </Item>
        </ItemContainer>
      ))}
      <Total>
        Total: R$ {totalPrice.toFixed(2)}
        <ContinueButton>Continuar com a entrega</ContinueButton>
      </Total>
    </CartContainer>
  );
};

export default Cart;

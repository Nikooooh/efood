import React, { useState } from "react";
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
  margin-right: 9px;
  font-family: Arial, sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #ff714d;
  }
`;

const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const DeliveryInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const DeliveryButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Cart = ({ items, onClose, removeFromCart }) => {
  const totalPrice = items.reduce((total, item) => total + item.preco, 0);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    cep: "",
    numero: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleContinueToDelivery = () => {
    setShowDeliveryForm(true);
  };

  const handleBackToCart = () => {
    setShowDeliveryForm(false);
  };

  const handleContinueToPayment = () => {
    console.log("Continuar com o pagamento");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.nome) {
      errors.nome = "O nome é obrigatório";
    }
    if (!formData.endereco) {
      errors.endereco = "O endereço é obrigatório";
    }
    if (!formData.cidade) {
      errors.cidade = "A cidade é obrigatória";
    }
    if (!formData.cep) {
      errors.cep = "O CEP é obrigatório";
    }
    if (!formData.numero) {
      errors.numero = "O número é obrigatório";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleContinueToPayment();
    }
  };

  return (
    <CartContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Title>
        {showDeliveryForm ? "Informações de Entrega" : "Carrinho de Compras"}
      </Title>
      {showDeliveryForm ? (
        <DeliveryForm onSubmit={handleSubmit}>
          <DeliveryInput
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
          {formErrors.nome && <ErrorMessage>{formErrors.nome}</ErrorMessage>}
          <DeliveryInput
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleInputChange}
          />
          {formErrors.endereco && (
            <ErrorMessage>{formErrors.endereco}</ErrorMessage>
          )}
          <DeliveryInput
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleInputChange}
          />
          {formErrors.cidade && (
            <ErrorMessage>{formErrors.cidade}</ErrorMessage>
          )}
          <DeliveryInput
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleInputChange}
          />
          {formErrors.cep && <ErrorMessage>{formErrors.cep}</ErrorMessage>}
          <DeliveryInput
            type="text"
            name="numero"
            placeholder="Número"
            value={formData.numero}
            onChange={handleInputChange}
          />
          {formErrors.numero && (
            <ErrorMessage>{formErrors.numero}</ErrorMessage>
          )}
          <DeliveryButtonContainer>
            <ContinueButton onClick={handleBackToCart}>
              Voltar para o carrinho
            </ContinueButton>
            <ContinueButton type="submit">
              Continuar com o pagamento
            </ContinueButton>
          </DeliveryButtonContainer>
        </DeliveryForm>
      ) : (
        <>
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
            <ContinueButton onClick={handleContinueToDelivery}>
              Continuar com a entrega
            </ContinueButton>
          </Total>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;

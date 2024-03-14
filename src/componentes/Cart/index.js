import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #e66767;
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
  background-color: #ffebd9;
  padding: 12px;
  width: 289px;
  margin-left: -5px;
  height: 100px;
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
  color: #e66767;
  font-family: "Roboto", sans-serif;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #e66767;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 12px;
`;

const Total = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: #ffebd9;
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
  color: white;
`;

const RemoveItemButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 80px;
`;

const ContinueButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 20px;
  width: 105%;
  font-weight: 700;
  margin-left: -7px;
  font-family: Arial, sans-serif;
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Cart = ({ items, onClose, removeFromCart }) => {
  const navigate = useNavigate();
  const totalPrice = items.reduce((total, item) => total + item.preco, 0);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    cep: "",
    numero: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expirationDate: "",
    cvv: "",
  });
  const [cardFormErrors, setCardFormErrors] = useState({});

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/checkout")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dados da API de checkout:", data);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API de checkout:", error);
      });
  }, []);
  const handleContinueToDelivery = () => {
    setShowDeliveryForm(true);
    setShowPaymentForm(false);
  };

  const handleBackToCart = () => {
    setShowDeliveryForm(false);
    setShowPaymentForm(false);
  };

  const handleContinueToPayment = () => {
    setShowDeliveryForm(false);
    setShowPaymentForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    if (validateDeliveryForm()) {
      handleContinueToPayment();
    }
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    if (validatePaymentForm()) {
      handleFinishOrder();
    }
  };

  const validateDeliveryForm = () => {
    let errors = {};
    const nomeRegex = /^[a-zA-Z\s]*$/;
    const cepRegex = /^\d{5}-\d{3}$/;
    const numeroRegex = /^\d+$/;

    if (!formData.nome.match(nomeRegex)) {
      errors.nome = "O nome não pode conter números";
    }
    if (!formData.endereco) {
      errors.endereco = "O endereço é obrigatório";
    }
    if (!formData.cidade) {
      errors.cidade = "A cidade é obrigatória";
    }
    if (!formData.cep.match(cepRegex)) {
      errors.cep = "Formato de CEP inválido";
    }
    if (!formData.numero.match(numeroRegex)) {
      errors.numero = "O número deve conter apenas dígitos";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePaymentForm = () => {
    let errors = {};
    const cardNameRegex = /^[a-zA-Z\s]*$/;

    if (!cardData.cardNumber) {
      errors.cardNumber = "O número do cartão é obrigatório";
    }
    if (!cardData.cardName.match(cardNameRegex)) {
      errors.cardName = "O nome no cartão não pode conter números";
    }
    if (!cardData.expirationDate) {
      errors.expirationDate = "A data de validade é obrigatória";
    }
    if (!cardData.cvv) {
      errors.cvv = "O CVV é obrigatório";
    }
    setCardFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFinishOrder = () => {
    if (!items || items.length === 0) {
      console.error("O carrinho está vazio.");
      return;
    }

    const orderData = {
      products: items.map((item) => ({
        id: item.id,
        nome: item.nome,
        price: item.preco,
      })),
      delivery: {
        receiver: formData.nome,
        address: {
          description: formData.endereco,
          city: formData.cidade,
          zipCode: formData.cep,
          number: formData.numero,
          complement: "",
        },
      },
      payment: {
        card: {
          name: cardData.cardName,
          number: cardData.cardNumber,
          code: cardData.cvv,
          expires: {
            month: cardData.expirationDate.split("/")[0],
            year: cardData.expirationDate.split("/")[1],
          },
        },
      },
    };

    fetch("https://fake-api-tau.vercel.app/api/efood/checkout", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        navigate("/confirmacao", { state: { orderId: data.orderId } });
      })
      .catch((error) => {
        console.error("Erro ao concluir o pedido:", error);
      });
  };

  return (
    <CartContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Title>
        {showDeliveryForm || showPaymentForm
          ? showPaymentForm
            ? "Informações de Pagamento"
            : "Informações de Entrega"
          : ""}
      </Title>
      {showPaymentForm ? (
        <Form onSubmit={handleSubmitPayment}>
          <Input
            type="text"
            name="cardNumber"
            placeholder="Número do Cartão"
            value={cardData.cardNumber}
            onChange={handleCardInputChange}
          />
          {cardFormErrors.cardNumber && (
            <ErrorMessage>{cardFormErrors.cardNumber}</ErrorMessage>
          )}
          <Input
            type="text"
            name="cardName"
            placeholder="Nome no Cartão"
            value={cardData.cardName}
            onChange={handleCardInputChange}
          />
          {cardFormErrors.cardName && (
            <ErrorMessage>{cardFormErrors.cardName}</ErrorMessage>
          )}
          <Input
            type="text"
            name="expirationDate"
            placeholder="Data de Validade (MM/AA)"
            value={cardData.expirationDate}
            onChange={handleCardInputChange}
          />
          {cardFormErrors.expirationDate && (
            <ErrorMessage>{cardFormErrors.expirationDate}</ErrorMessage>
          )}
          <Input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardData.cvv}
            onChange={handleCardInputChange}
          />
          {cardFormErrors.cvv && (
            <ErrorMessage>{cardFormErrors.cvv}</ErrorMessage>
          )}
          <ButtonContainer>
            <ContinueButton onClick={handleContinueToDelivery}>
              Voltar para as informações de entrega
            </ContinueButton>
            <ContinueButton type="submit">Concluir Pedido</ContinueButton>
          </ButtonContainer>
        </Form>
      ) : showDeliveryForm ? (
        <Form onSubmit={handleSubmitDelivery}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
          {formErrors.nome && <ErrorMessage>{formErrors.nome}</ErrorMessage>}
          <Input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleInputChange}
          />
          {formErrors.endereco && (
            <ErrorMessage>{formErrors.endereco}</ErrorMessage>
          )}
          <Input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleInputChange}
          />
          {formErrors.cidade && (
            <ErrorMessage>{formErrors.cidade}</ErrorMessage>
          )}
          <Input
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleInputChange}
          />
          {formErrors.cep && <ErrorMessage>{formErrors.cep}</ErrorMessage>}
          <Input
            type="text"
            name="numero"
            placeholder="Número"
            value={formData.numero}
            onChange={handleInputChange}
          />
          {formErrors.numero && (
            <ErrorMessage>{formErrors.numero}</ErrorMessage>
          )}
          <ButtonContainer>
            <ContinueButton onClick={handleBackToCart}>
              Voltar para o carrinho
            </ContinueButton>
            <ContinueButton type="submit">
              Continuar com o pagamento
            </ContinueButton>
          </ButtonContainer>
        </Form>
      ) : (
        <>
          {items.map((item, index) => (
            <ItemContainer key={index}>
              <Item>
                <ItemImage src={item.foto} alt={item.nome} />
                <ItemDetails>
                  <ItemName>{item.nome}</ItemName>
                  <ItemPrice>R$ {item.preco.toFixed(2)}</ItemPrice>
                </ItemDetails>
                <RemoveItemButton onClick={() => removeFromCart(index)}>
                  <FaTrash color="#ff5733" />
                </RemoveItemButton>
              </Item>
            </ItemContainer>
          ))}
          <Total>
            Valor Total: R$ {totalPrice.toFixed(2)}
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

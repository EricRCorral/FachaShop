import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

function Cart(props) {

  const Container = styled.div`
  width: 100%;
  margin: 5%;
  `;

  const EmptyCart = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin: 10vh 10% 15vh 0px;
  line-height: 34px;
  @media screen and (min-width: 630px) {
    width: 70%;
  }
  @media screen and (min-width: 800px) {
    font-size: 28px;
    margin-top: 15vh;
  }
  @media screen and (min-width: 1050px) {
    font-size: 36px;
  }
  `

  const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5%;
  @media screen and (min-width: 630px) {
  width: 78%;
  }
  `;

  const Col = styled.div`
  flex-basis: 25%;
  margin: 2% 0px;
  text-align: center;
  font-weight: bold;
  @media screen and (min-width: 480px) and (max-width: 629px) {
    font-size: 18px;
  }
  @media screen and (min-width: 630px) {
    margin-left: 1%;
  }
  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
  @media screen and (min-width: 960px) {
    font-size: 20px;
  }
  @media screen and (min-width: 630px) {
  flex-basis: 19%;
  }
  `;

  const ImgSM = styled.img`
  width: 90%;
  cursor: pointer;
  @media screen and (min-width: 630px) {
  display: none;
  }
  `

  const ImgM = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (min-width: 630px) {
    display: flex;
    width: 20%;
  }
  `

  const BtnQuantity = styled.div`
  border: solid black 1px;
  padding: 5px 4px 0px 4px;
  display: inline;
  font-size: 12px;
  cursor: pointer;
  transition: .3s ease;
  &:hover {
    color: white;
    background-color: black;
  }
  `

  const Delete = styled.span`
  border: solid black 1px;
  padding: 2px 5px;
  border-radius: 50%;
  margin-right: 7%;
  cursor: pointer;
  transition: .3s ease;
  &:hover {
    color: white;
    background-color: black;
  }
  `

  const BuyBox = styled.div`
  @media screen and (min-width: 630px) {
    width: 20%;
    position: fixed;
    top: 12%;
    right: 1%;
  }
  @media screen and (min-width: 800px) {
    font-size: 18px;
    top: 14%;
    right: -2%;
  }
  @media screen and (min-width: 1100px) {
    font-size: 20px;
    right: -7%;
    top: 17%;
  }
  `

  const BorderBox = styled.div`
  @media screen and (min-width: 630px) {
    border-left: solid rgba(150,150,150,.5) 1px;
    height: 100vh;
    position: fixed;
    right: 22%;
    top: 1%;
  }
  @media screen and (min-width: 800px) {
    right: 22%;
  }
  @media screen and (min-width: 1100px) {
    right: 15%;
  }
`

  const BuyItem = styled.div`
  font-weight: bold;
  margin: 5vh 0px;
  @media screen and (min-width: 800px) {
    margin: 7vh 0px;
  }
  @media screen and (min-width: 1000px) {
    margin: 10vh 0px;
  }
  `

  const BuyBtn = styled.div`
  padding: 2.3vh 3vh;
  border: solid black 2px;
  transition: .3s ease;
  font-weight: bold;
  font-size: 18px;
  width: fit-content;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 630px)  {
    padding: 1.5vh 2vh;
  }
  `

  const [subtotal, setSubtotal] = useState();
  const [discount, setDiscount] = useState();
  const [total, setTotal] = useState();

  function navigate(url) {
    window.location.assign(`/FachaShop/article/${url}`)
  }

  function deleteArticle(id) {

    let newCart = props.cart.slice(0,);

    newCart.map((article, i) => {

      if (article.id === id) {

        newCart.splice(i, 1)

      }
    })

    props.setCart(newCart);

    if (newCart.length === 0) {
      
      localStorage.removeItem('cart')

    } else {

      localStorage.setItem('cart', JSON.stringify(newCart));

    }


    fetch(props.dbUrl, { method: 'PUT', body: JSON.stringify(newCart) }).then(data => data.json())

  }

  function modifyQuantity(id, operator, index) {

    let newCart = props.cart.slice(0,);

    newCart.map((article, i) => {

      if (article.id === id) {

        if (operator === '-' && article.quantity > 1) {

          article.quantity -= 1

        }

        if (operator === '+') {

          article.quantity += 1

        }
      }
    })

    props.setCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));

    fetch(props.dbUrl, { method: 'PUT', body: localStorage.getItem('cart') }).then(data => data.json())

  }

  useEffect(() => {

    let subtotalVar = 0;

    let discountVar = 0;

    props.cart.map(article => {

      subtotalVar += article.price * article.quantity

      if (article.discount) {

        discountVar += article.price * .2 * article.quantity

      }

    })

    setSubtotal(subtotalVar);

    setDiscount(discountVar);

    setTotal(subtotalVar - discountVar);

  }, [props.cart])

  return (

    <Container>

      {props.cart.length === 0 &&

        <EmptyCart>¡ Carrito vacío, agregale productos facheros !</EmptyCart>

      }

      {props.cart.map((article, i) => {

        return <React.Fragment key={i}>

          <ImgSM src={article.img} alt={article.name} onClick={() => navigate(article.id)} />

          <Row>

            <ImgM src={article.img} alt={article.name} onClick={() => navigate(article.id)} />

            <Col>

              <div onClick={() => navigate(article.id)} style={{ cursor: 'pointer' }}>
                {article.name}
              </div>

            </Col>

            <Col>

              {(!article.discount) ? `$${article.price}` :
                <>
                  <span style={{ textDecorationLine: 'line-through', color: 'red' }}>${article.price}</span>
                  <div>${article.price - article.price * .2}</div>
                </>
              }

            </Col>

            <Col>

              <BtnQuantity onClick={() => modifyQuantity(article.id, '-')}><span className='fas fa-minus'></span></BtnQuantity> {article.quantity} <BtnQuantity onClick={() => modifyQuantity(article.id, '+')}><span className='fas fa-plus'></span></BtnQuantity>

            </Col>

            <Col>

              <Delete className='fas fa-times' onClick={() => deleteArticle(article.id)}></Delete>

            </Col>

          </Row>

        </ React.Fragment>
      })
      }

      <BuyBox>

        <BuyItem>

          Subtotal: ${subtotal}

        </BuyItem>

        <BuyItem>

          Descuento: <span style={{ color: 'red' }}>${discount}</span>

        </BuyItem>

        <BuyItem>

          Total: ${total}

        </BuyItem>

        <BuyBtn>Pagar</BuyBtn>

        <BorderBox />

      </BuyBox>

    </Container >

  );
}

export default Cart;

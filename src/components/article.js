import React from 'react';
import styled from 'styled-components'

function Article(props) {

  const Container = styled.div`
  width: 100%;
  `

  const Row = styled.div`
  margin: 5% 5%;
  @media screen and (min-width: 630px) {
    display: flex;
    flex-direction: row;
    margin: 5%;
  }
  `

  const Col = styled.div`
  width: 90vw;
  @media screen and (min-width: 630px) {
    width: 30vw;
    margin-left: 5vw;
  }
  `

  const Image = styled.img`
  width: 90vw;
  margin: 5% auto;
  @media screen and (min-width: 630px) {
    max-width: 55vw;
    height: 50vw; 
    display: flex;
    margin: 0px;
  }
  @media screen and (min-width: 870px) {
    height: 96vh;
  }
  `

  const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media screen and (min-width: 630px) and (max-width: 800px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1060px) {
    font-size: 32px;
    line-height: 46px;
  }
  `

  const TextArticle = styled.p`
  color: rgba(0, 0, 0, .6);
  font-weight: bold;
  @media screen and (min-width: 630px) and (max-width: 800px) {
  font-size: 14px;
  }
  @media screen and (min-width: 1060px) {
    font-size: 18px;
    line-height: 30px;
  }
  `;

  const PriceCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin: 5vh 0px;
  `

  const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media screen and (min-width: 630px) and (max-width: 800px) {
    font-size: 16px
  }
  @media screen and (min-width: 1060px) {
    font-size: 24px;
  }
  `

  const CartBtn = styled.div`
  padding: 2.3vh 3vh;
  border: solid black 2px;
  transition: .3s ease;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border : solid darkgoldenrod 2px;
    color: darkgoldenrod;
  }
  @media screen and (min-width: 630px) {
    font-size: 15px;
  };
  @media screen and (min-width: 630px) and (max-width: 800px) {
    padding: 1.5vh 2vh;
    width: 50%;
  }
  @media screen and (min-width: 1060px) {
    font-size: 18px;
  }
  `

  const FlexDiv = styled(PriceCart)`
  margin: 8vh 0px;
  padding: .6vh 0px;
  border-top: solid grey 1px;
  border-bottom: solid grey 1px;
  @media screen and (min-width: 630px) and (max-width: 959px) {
    margin: 4vh 0px;
  }
  `

  const Icon = styled.span`
  font-size: 20px;
  color: rgba(0, 0, 0, .3);
  transition: .5s ease;
  cursor: pointer;
  &:hover {
    color: black;
  }
  `

  const article = props.articles.filter(article => article.id === window.location.pathname.slice(9,))[0];

  return (

    <Container>

      <Row>

        <Image src={article.img} />


        <Col>

          <Name>{article.name}</Name>

          <h4>Detalles:</h4>

          <TextArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reprehenderit, officiis saepe molestias eos quis voluptatibus laudantium natus aliquam eius cumque enim porro itaque ullam officia facilis veniam dolorum, veritatis eligendi! Distinctio esse beatae sapiente, minima velit temporibus non qui quisquam laboriosam quo architecto vero!</TextArticle>

          <PriceCart>

            <Price>{(!article.discount) ? `$${article.price}` :
              <>
                <span style={{ textDecorationLine: 'line-through', color: 'red' }}>${article.price}</span>
                <div>${article.price - article.price * .2}</div>
              </>
            }</Price>

            <CartBtn onClick={() => props.addCart(article.id)}>

              Agregar al carrito <span><i className='fas fa-shopping-cart'></i></span>

            </CartBtn>

          </PriceCart>

          <FlexDiv>

            <TextArticle>Compartir :</TextArticle>

            <Icon className='fab fa-facebook'></Icon>
            <Icon className='fab fa-twitter'></Icon>
            <Icon className='fab fa-instagram'></Icon>

          </FlexDiv>

        </Col>

      </Row>

    </Container>

  );
}

export default Article;

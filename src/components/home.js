import React from 'react';
import styled from 'styled-components'
import womanHome from '../assets/images/home/woman-home.png'
import manHome from '../assets/images/home/man-home.png'
import womanBgBlack from '../assets/images/home/woman-bg-black.jpg'

const HomeBg = styled.main`
  min-height: 1050px;
  background-image: linear-gradient(black, rgb(50, 50, 50),  rgb(50, 50, 50), black);
  @media screen and (min-width: 630px) {
    min-height: 110vh;
  }
  `;

const ManImage = styled.img`
  position: absolute;
  z-index: 1;
  transition: 1.5s ease;
  cursor: pointer;
  border: solid white 2px;
  opacity: .6;
  width: 230px;
  top: 128vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  &:hover {
    border: solid darkgoldenrod 2px;
    opacity: 1 !important;
  };
  @media screen and (min-width: 1200px) {
    right: 11.1vw;
  };
  @media screen and (min-width: 801px) {
    top: 20vh;
  };
  @media screen and (min-width: 630px) {
    left: auto;
    width: auto;
  }
  @media screen and (min-width: 1040px) and (max-width: 1250px) {
    right: 10vw;
  };
  @media screen and (min-width: 900px) and (max-width: 1039px) {
    right: 5vw;
  };
  @media screen and (min-width: 630px) and (max-width: 899px) {
    right: 1vw !important;
  };
  @media screen and (min-width: 630px) and (max-width: 800px) {
    top: 30vh;
  }
  `

const WomanImage = styled.img`
  position: absolute;
  z-index: 1;
  transition: 1.5s ease;
  cursor: pointer;
  border: solid white 2px;
  opacity: .6;
  width: 230px;
  top: 60vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  &:hover {
    border: solid darkgoldenrod 2px;
    opacity: 1 !important;
  };
  @media screen and (min-width: 1200px) {
    left: 11.1vw;
  };
  @media screen and (min-width: 801px) {
    top: 20vh;
  };
  @media screen and (min-width: 630px) {
    right: auto;
    width: auto;
  }
  @media screen and (min-width: 1040px) and (max-width: 1250px) {
    left: 10vw;
  };
  @media screen and (min-width: 900px) and (max-width: 1039px) {
    left: 5vw;
  };
  @media screen and (min-width: 630px) and (max-width: 899px) {
    left: 1vw !important;
  };
  @media screen and (min-width: 630px) and (max-width: 800px) {
    top: 30vh;
  }
  `

const TextHome = styled.div`
  position: absolute;
  z-index: 1;
  left: 5vw;
  top: 17vh;
  width: 90%;
  text-align: center;
  color: rgb(215, 215, 215);
  line-height: 15vh;
  font-size: 50px;
  @media screen and (min-width: 630px) {
    line-height: 15vh;
    width: 20%;
  };
  @media screen and (min-width: 801px) {
    font-size: 5vw;
    left: 39vw;
  };
  @media screen and (min-width: 801px) and (max-width: 1250px) {
    left: 40vw;
  };
  @media screen and (min-width: 630px) and (max-width: 800px) {
    width: 100%;
    left: 0px;
    font-size: 7vw;
  }
  `;

const WomanBgBlack = styled.div`
  height: 100vh;
  background-image: url(${womanBgBlack});
  background-size: cover;
  `;

const TextGorro = styled.div`
  color: white;
  font-size: 25px;
  width: 140px;
  padding: 20px 0px 0px 10px;
  @media screen and (min-width: 630px) {
    position: absolute;
    right: 10vw;
    top: 125vh;
    text-align: right;
    font-size: 6vw;
    width: 30vw;
  }
  `;

const BtnGorro = styled.a`
  width: 60px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 246vh;
  border: solid white 2px;
  background-color: white;
  color: black;
  text-decoration: none;
  transition: .3s ease;
  &:hover {
    background-color: black;
    border: solid darkgoldenrod 2px;
    color: darkgoldenrod;
    cursor: pointer;
  };
  @media screen and (min-width: 630px) {
    top: 172vh;
    left: 77vw;
  };
  @media screen and (min-width: 700px) {
    top: 177vh;
    left: 78.5vw;
  }
  @media screen and (min-width: 800px) {
    top: 182vh;
    left: 79.5vw;
  }
  @media screen and (min-width: 900px) {
    top: 188vh;
    left: 80.5vw;
  }
  @media screen and (min-width: 1000px) {
    top: 195vh;
    left: 81.5vw;
  }
  @media screen and (min-width: 1100px) {
    top: 198.5vh;
    left: 79.3vw;
    width: 85px;
    padding: 10px 18px;
    font-size: 20px;
  }
  `;

const SellersTitle = styled.h1`
  text-align: center;
  margin: 10vh 0px;
  @media screen and (min-width: 630px) {
    font-size: 40px;
  }
  `

const BestSellers = styled.div`
  margin: 3vh 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media screen and (min-width: 960px) {
    margin: 3vh 3vw;
  };
  @media screen and (min-width: 1100px) {
    margin: 3vh 8vw;
  };
  `;

const SellerItem = styled.div`
  width: 80%;
  margin: 8vh auto;
  margin-top: 0px;
  height: 70vw;
  text-align: center;
  transition: 1s ease;
  &:hover {
    -webkit-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
  }
  @media screen and (min-width: 630px) {
    width: 40%;
    height: 35vw
  }
  @media screen and (min-width: 960px) {
    width: 26%;
    height: 20vw;
  }
  `;

const SellerImg = styled.img`
  width: 100%;
  height: 75%;
  cursor: pointer;
  `;

const SellerDesc = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  @media screen and (min-width: 480px) and (max-width: 629px) {
    font-size: 25px;
  };
  @media screen and (min-width: 800px) and (max-width: 959px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 19px;
  }
  `

const SellerName = styled.div`
  width: 50%;
  font-weight: bold;
  cursor: pointer;
  `;

const SellerPriceCart = styled.div`
  width: 25%;
  font-weight: bold;
  transition: .3s ease;
  `

function Home(props) {

  const bestSellersArr = props.articles.slice(0, 6)

  return (

    <>

      <HomeBg>

        <WomanImage id='woman' title='Camperas de mujeres' src={womanHome} onClick={() => props.navigate('Campera de mujer')} alt="Mujer" />

        <TextHome>Combatí el invierno con <strong>facha</strong></TextHome>

        <ManImage id='man' title='Camperas de hombres' src={manHome} onClick={() => props.navigate('Campera de hombre')} alt="Hombre" />

      </HomeBg>

      <WomanBgBlack>

        <TextGorro>Mira nuestros últimos gorros de pura <strong>facha</strong></TextGorro>

        <BtnGorro onClick={() => props.navigate('Gorro')}>Ver mas</BtnGorro>

      </WomanBgBlack>

      <SellersTitle>Lo más vendido</SellersTitle>

      <BestSellers>

        {bestSellersArr.map((item, i) =>

          <SellerItem key={i}>

            <a href={`/FachaShop/article/${item.id}`}><SellerImg src={item.img} /></a>

            <SellerDesc>

              <SellerName><a href={`/FachaShop/article/${item.id}`} style={{color: 'black' , textDecoration: 'none'}}>{item.name}</a></SellerName>

              <SellerPriceCart>
                {(!item.discount) ? `$${item.price}` :
                  <>
                    <span style={{ textDecorationLine: 'line-through', color: 'red' }}>${item.price}</span>
                    <div>${item.price - item.price * .2}</div>
                  </>
                }
              </SellerPriceCart>

              <SellerPriceCart>
                <i className='fas fa-cart-plus fa-2x' style={{ cursor: 'pointer', fontSize: '28px' }} onClick={ () => props.addCart(item.id)}></i>
              </SellerPriceCart>

            </SellerDesc>

          </SellerItem>
        )}

      </BestSellers>

    </>
  );
}

export default Home;

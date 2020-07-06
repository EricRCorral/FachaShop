import React from 'react';
import styled from 'styled-components'

function Footer() {

  const FooterContainer = styled.footer`
  height: auto;
  background-color: rgb(210, 210, 210);
  padding: 5vh 10% 0px 10%;
  z-index: 1;
  position: relative;
  @media screen and (min-width: 630px) {
    padding: 5vh 0px 0px 0px;
  }
  `;

  const FooterRow = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media screen and (min-width: 630px) {
    margin: 3vh 5vw 0px 5vw;
    justify-content: space-between;
  };
  @media screen and (min-width: 960px) {
    margin: 3vh 11vw 0px 11vw;
  }
  `;

  const FooterCol = styled.div`
  flex-basis: 100%;
  margin-bottom: 5vh;
  @media screen and (min-width: 630px) {
    flex-basis: 27.5%;
  }
  `;

  const FooterLinks = styled.a`
  margin-bottom: 2.5vh;
  text-decoration: none;
  color: rgb(60, 60, 60);
  display: block;
    width: fit-content;
  &:hover {
    color: darkgoldenrod;
  }
  `

  const FooterTitles = styled.div`
  margin-bottom: 5vh;
  line-height: 5vh;
  font-weight: bold;
  font-size: 20px;
  `

  const Newsletter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 630px) and (max-width: 1100px) {
    display: block;
  }
  `

  const NewsletterInput = styled.input.attrs({ type: 'text' })`
  width: 50%;
  border: none;
  background-color: transparent;
  border-bottom: solid black 2px;
  &:focus {
    outline: none;
  };
  @media screen and (min-width: 480px) and (max-width: 629px) {
    width: 60%;
  };
  @media screen and (min-width: 630px) and (max-width: 1100px) {
    margin-bottom: 4vh;
    margin-left: 2px;
    width: 100%;
  }
  `

  const NewsletterBtn = styled.a`
  width: fit-content;
  padding: 1.5vh 1.5vh;
  border: solid rgb(210, 210, 210) 2px;
  background-color: black;
  transition: .3s ease;
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
  background-color: white;
  color: black;
  border: solid black 2px;
  };
  @media screen and (min-width: 480px) and (max-width: 629px) {
    font-size: 19px;
  };
  `;

  const SocialNetwork = styled.a`
  margin-right: 3vw;
  color: black;
  opacity: .6;
  text-decoration: none;
  transition: .3s ease;
  &:hover {
    opacity: 1;
  }
  `;

  const FooterDev = styled.div`
  margin-top: 8vh;
  line-height: 22px;
  `

  return (

    <FooterContainer id='footer-container'>

      <FooterRow>

          <FooterCol>

            <FooterTitles>¡Suscribite y recibí increibles descuentos en nuestros productos facheros!</FooterTitles>

            <Newsletter>

              <NewsletterInput placeholder='Email'/>

              <NewsletterBtn href='#'>Suscribirse</NewsletterBtn>

            </Newsletter>

          </FooterCol>

          <FooterCol>

            <FooterTitles>Nuestras redes</FooterTitles>

            <SocialNetwork href='#' className='fab fa-instagram fa-2x'></SocialNetwork>
            <SocialNetwork href='#' className='fab fa-twitter fa-2x'></SocialNetwork>
            <SocialNetwork href='#' className='fab fa-facebook fa-2x'></SocialNetwork>

          </FooterCol>

          <FooterCol>

            <FooterTitles>Sobre nosotros</FooterTitles>

            <FooterLinks href='#'>Quienes somos</FooterLinks>
            <FooterLinks href='#'>Trabaja con nosotros</FooterLinks>
            <FooterLinks href='#'>Contacto</FooterLinks>
            
            <FooterDev>
              Desarrollado con <i className='fas fa-code'></i> y <i className='fas fa-heart'></i> por Eric Corral
            </FooterDev>
          </FooterCol>

      </FooterRow>

    </FooterContainer>
  );
}

export default Footer;

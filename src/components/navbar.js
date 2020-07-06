import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import logo from '../assets/images/logo.png';

function Navbar(props) {

  const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  height: 11vh;
  position: fixed;
  z-index: 2;
  @media screen and (min-width: 900px) {
    justify-content: space-around;
  }
  `;

  const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `;

  const Logo = styled.a`
    margin-top: 3px;
    margin-left: 3px;
  @media screen and (min-width: 900px) {
    margin-left: 0px;
    margin-top: 4px;
  }
  `

  const Link = styled.a`
  color: white;
  text-decoration-line: none;
  margin: 0px 1vw;
  transition: .5s ease;
  cursor: pointer;
  &:hover {
    color: darkgoldenrod;
  }
  `

  const Input = styled.input.attrs({ type: 'text' })`
  border: none;
  background-color: black;
  border-bottom: solid white 1.5px;
  color: white;
  width: 50%;
  transition: .5s ease;
  margin: 6vh 1vw;
  &:focus {
    outline: none;
    border-bottom: solid darkgoldenrod 3px;
    width: 80%;
  }
  @media screen and (min-width: 900px) {
    margin: 0px 1vw;
    width: 15%;
    &:focus {
      width: 26%;
    }
  }
  `;

  const CollapseButton = styled.div`
  display: block;
  margin-right: 15px;
  margin-top: 5px;
  @media screen and (min-width: 900px) {
    display: none;
  }
  `

  const Collapse = styled.div`
  display: none;
  z-index: 2;
  @media screen and (min-width: 900px) {
  display: flex;
  }
  `

  const Sidenav = styled.div`
  width: 50vw;
  height: 100%;
  position: fixed;
  top: 0;
  right: 10;
  background-color: black;
  transform: translateX(100vw);
  transition: .5s;
  text-align: center;
  z-index: 2;
  border-left: solid white 1px;
  @media screen and (min-width: 900px) {
    transform: translateX(0vw);
    display: none;
  }
  `

  const SidenavLink = styled.a`
  color: white;
  text-decoration-line: none;
  display: block;
  margin-top: 9vh;
  z-index: 2;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  `

  const [pathname, setPathname] = useState(window.location.pathname.slice(8,));

  const [cartQuantity, setCartQuantity] = useState();

  useEffect(() => {

    const inputVal = pathname.split('-').join(' ')

    let quantity = 0;

    if (props.cart !== null && props.cart.length > 0) {

      props.cart.map(article => quantity += article.quantity)

    }

    setCartQuantity(quantity);

    if (window.location.pathname.includes('search')) {

      document.getElementsByTagName('input').item(0).setAttribute('value', inputVal);
      document.getElementsByTagName('input').item(1).setAttribute('value', inputVal);

    }

  })

  function openSidenav() {

    document.getElementById('sidenav').style.setProperty('transform', 'translateX(50vw)')
  }

  function closeSidenav() {

    document.getElementById('sidenav').style.setProperty('transform', 'translateX(100vw)')
  }

  function account() {

    if (localStorage.getItem('user') !== null) {

      localStorage.clear()

      props.setCart([])

      props.setUser(null)

    } else {

      window.location.assign('/account')

    }

  }

  return (

    <>

      <Nav>

        <Sidenav id='sidenav'>

          <SidenavLink>

            <i className='fas fa-times' onClick={closeSidenav}></i>

          </SidenavLink>

          <SidenavLink onClick={() => props.navigate('Mujer')}>Mujeres</SidenavLink>

          <SidenavLink onClick={() => props.navigate('Hombre')}>Hombres</SidenavLink>

          <SidenavLink onClick={() => props.navigate('Oferta')}>Ofertas</SidenavLink>

          <SidenavLink onClick={account}>{(props.user !== null) ? 'Salir' : 'Entrar/Crear'}</SidenavLink>

          <SidenavLink href="/cart"><i className='fas fa-shopping-cart'></i><sup> {cartQuantity}</sup></SidenavLink>

          <Input placeholder='Buscar...' onKeyPress={(event) => props.navigate(undefined, event)} />

        </Sidenav>

        <NavBox>

          <Logo href="/"><img src={logo} alt="FachaShop" /></Logo>

        </NavBox>

        <Collapse>

          <NavBox>

            <Link onClick={() => props.navigate('Mujer')}>Mujeres</Link>

            <Link onClick={() => props.navigate('Hombre')}>Hombres</Link>

            <Link onClick={() => props.navigate('Oferta')}>Ofertas</Link>

            <Link onClick={account}>{(props.user !== null) ? 'Salir' : 'Entrar/Crear'}</Link>

            <Link href="/cart"><i className='fas fa-shopping-cart'></i><sup> {cartQuantity}</sup></Link>

            <Input placeholder='Buscar...' onKeyPress={(event) => props.navigate(undefined, event)} />

          </NavBox>

        </Collapse>

        <CollapseButton>

          <i className='fas fa-bars fa-2x' onClick={openSidenav}></i>

        </CollapseButton>

      </Nav>

    </>
  );
}

export default Navbar;

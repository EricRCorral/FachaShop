import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

function Account(props) {

  const [page, setPage] = useState('sign-in');

  const [error, setError] = useState(undefined);

  const Box = styled.div`
  width: 80%;
  height: 45vh;
  margin: 0px auto;
  background-color: rgba(150,150,150,.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  @media screen and (min-width: 630px) {
    width: 50%;
  }
  @media screen and (min-width: 960px) {
    width: 30%;
  }
  @media screen and (min-width: 1100px) {
    width: 25%;
  }
  `;

  const Title = styled.h2`
  margin: 12vh auto 7vh auto;
  text-align: center;
  font-size: 34px;
  `

  const Input = styled.input.attrs({ type: 'email' })`
  border: none;
  background-color: transparent;
  ${(error !== undefined) ? (error.search('EMAIL') !== -1) ? { borderBottom: 'solid red 2px' } : { borderBottom: 'solid black 2px' } : { borderBottom: 'solid black 2px' }};
  width: 40%;
  transition: .5s ease;
  margin: 0px auto;
  display: block;
  font-size: 18px;
  &:focus {
    outline: none;
    border-bottom: solid rgba(0,0,0,.7) 2px;
    width: 70%;
  }
  &::placeholder {
    text-align: center;
  };
  `;

  const InputPassword = styled(Input).attrs({ type: 'password' })`
  ${(error !== undefined) ? (error.search('PASSWORD') !== -1) ? { borderBottom: 'solid red 2px' } : { borderBottom: 'solid black 2px' } : { borderBottom: 'solid black 2px' }};
`;

  const Button = styled.div`
  display: block;
  width: fit-content;
  padding: 7px 20px;
  border: solid black 2px;
  font-size: 18px;
  margin: 0px auto;
  cursor: pointer;
  transition: .3s ease;
  ${(props.user !== null) ? { opacity: .5, cursor: 'not-allowed' } : ''}
  &:hover {
    background-color: black;
    color: white;
  }
  `

  const ChangePage = styled.div`
  color: rgb(100, 100, 100);
  margin: 0px auto -5vh auto;
  font-size: 14px;
  text-align: center;
  width: fit-content;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
  }
  `

  function changePage() {

    setPage((page === 'sign-in' ? 'sign-up' : 'sign-in'))

  }

  function auth() {

    const body = JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      returnSecureToken: true
    });

    // Robar!? Como pudiste !?, no has aprendido nada del que nos da los sermones en la iglesia ese capitán no sé que!! Vivimos en una sociedad de leyes! Por que crees que alquilo las películas de academia de policía, por diversión??? Pues no!! Yo no oí reír a nadie y tú!!??... solo con ese de los ruidos jeje “blublublu argrrrrrr blasblasblas ahhhhjjjjjj” jejejejajaa… Eh, en que estaba? Ah si! No te robes mi apiKey!

    const apiKey = 'AIzaSyDt4ee1Ypp1Mhsdn-uVoZ4Q32sCkFRYhgE';

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';

    if (page === 'sign-in') {

      fetch(`${url}InWithPassword?key=${apiKey}`, { method: 'POST', body }).then(resp => resp.json()).then(resp => {

        console.log(resp);

        if (resp.idToken !== undefined) {

          localStorage.setItem('user', JSON.stringify({ idToken: resp.idToken, localId: resp.localId }))

          props.setUser({
            idToken: resp.idToken,
            localId: resp.localId
          })

          setError(undefined)

          setTimeout(() => {
            window.location.assign('/FachaShop')
          }, 500);

        } else {

          setError(resp.error.message)

        }

      })


    } else {

      fetch(`${url}Up?key=${apiKey}`, { method: 'POST', body }).then(resp => resp.json()).then(resp => {

        console.log(resp);

        if (resp.idToken !== undefined) {

          localStorage.setItem('user', JSON.stringify({ idToken: resp.idToken, localId: resp.localId }))

          props.setUser({
            idToken: resp.idToken,
            localId: resp.localId
          })

          setError(undefined)

          setTimeout(() => {
            window.location.assign('/FachaShop')
          }, 500);

        } else {

          setError(resp.error.message)

        }

      })

    }

  }

  useEffect(() => {

    document.getElementById('footer-container').style.setProperty('margin-top', '19vh')

    return () => document.getElementById('footer-container').style.setProperty('margin-top', '0px')


  }, [])

  return (

    <>

      <Title>{(page === 'sign-in') ? 'Ingresar' : 'Crear cuenta'}</Title>

      <Box>

        <Input id='email' required placeholder='Email' />

        <InputPassword id='password' required placeholder='Contraseña' />

        {(error !== undefined) ? <small style={{ color: 'red', textAlign: 'center', textTransform: 'lowercase', marginBottom: '-5vh' }}>{error}</small> : ''}

        <Button id='auth-button' onClick={auth}>{(page === 'sign-in') ? 'Entrar' : 'Crear'} {(props.user !== null) ? <i className='fas fa-check'></i> : ''}</Button>

        <ChangePage onClick={changePage}>{(page === 'sign-in') ? '¿No tenés cuenta? ¡Create una,  facha!' : '¿Ya tenés cuenta? ¡Entra!'}</ChangePage>

      </Box>

    </>
  );
}

export default Account;

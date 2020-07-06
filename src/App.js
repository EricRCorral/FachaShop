import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/navbar';
import Home from './components/home';
import Search from './components/search';
import Account from './components/account';
import Article from './components/article';
import Cart from './components/cart';
import Footer from './components/footer';
import articles from './components/articles';

function App() {

  const [cart, setCart] = useState([]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const dbUrl = (user !== null) ? `https://fachashop-7123a.firebaseio.com/user/${user.localId}.json` : '';

  const Components = styled.main`
  min-height: 70vh;
  padding-top: 11vh;
  z-index: 1;
  `;

  function addCart(id) {

    let newCart = (cart !== null) ? cart.slice(0,) : [];

    if (cart !== null && cart.filter(article => article.id === id).length > 0) {

      newCart.map((article, i) => {

        if (article.id === id) {

          newCart[i].quantity += 1

        }

      })

    } else {

      for (let i = 0; i < articles.length; i++) {

        const ARTICLE = articles[i];

        if (ARTICLE.id === id) {

          newCart.push(
            {
              id: id,
              name: ARTICLE.name,
              price: ARTICLE.price,
              img: ARTICLE.img,
              discount: ARTICLE.discount,
              quantity: 1
            }
          )
        }
      }
    }

    setCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart))

    fetch(dbUrl, { method: 'PUT', body: localStorage.getItem('cart') }).then(data => data.json())

  }

  function navigate(filterVal, event) {

    localStorage.setItem('filters', JSON.stringify({
      gender: [],
      type: [],
      discount: false,
      price: 'undefined'
    }))

    if (filterVal !== undefined || filterVal === false) {

      const filter = JSON.parse(localStorage.getItem('filters'))

      switch (filterVal) {

        case 'Hombre':
        case 'Mujer':

          filter.gender.push(filterVal);

          break;

        case 'Gorro':

          filter.type.push(filterVal);

          break;

        case 'Campera de mujer':

          filter.gender.push('Mujer');

          filter.type.push('Campera')

          break;

        case 'Campera de hombre':

          filter.gender.push('Hombre');

          filter.type.push('Campera');

          break;

        default:

          filter.discount = true;

          break;
      }

      localStorage.setItem('filters', JSON.stringify(filter))

      return window.location.assign('/search/')
    }

    if (event.key === 'Enter') {

      const pathToTravel = event.target.value.match(/[a-z]*/gi).filter(item => item != '').join('-');

      window.location.assign(`/search/${pathToTravel}`)
    }

  }

  useEffect(() => {

    const storage = localStorage.getItem('cart')

    if (user !== null) {

      fetch(dbUrl, { method: 'GET' }).then(resp => resp.json()).then(resp => {

        if (resp !== null) {

          setCart(resp);

          localStorage.removeItem('cart');

          localStorage.setItem('cart', JSON.stringify(resp));

        } else {

          fetch(dbUrl, { method: 'PUT', body: storage }).then(data => data.json()).then(data => {

            setCart((storage !== null) ? data : []);

          })
        }
      })

    } else {

      setCart((storage !== null) ? JSON.parse(storage) : [])

    }

  }, [])

  return (

    <>

      <Navbar navigate={navigate} cart={cart} setCart={setCart} user={user} setUser={setUser} />

      <Components>

        <BrowserRouter basename='/' >

          <Routes basename='/'>

            <Route path='/home' element={<Home articles={articles} navigate={navigate} addCart={addCart} />} />
            <Route path='/account' element={<Account user={user} setUser={setUser} />} />
            <Route path='/search/:query' element={<Search articles={articles} addCart={addCart} />} />
            <Route path='/search/' element={<Search articles={articles} addCart={addCart} />} />
            <Route path='/article/:id' element={<Article articles={articles} addCart={addCart} />} />
            <Route path='/cart' element={<Cart articles={articles} cart={cart} setCart={setCart} dbUrl={dbUrl} />} />

          </Routes>

        </BrowserRouter>

      </Components>

      <Footer />

    </>
  );
}

export default App;

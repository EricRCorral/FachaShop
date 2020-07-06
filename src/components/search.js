import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
@media screen and (min-width: 630px) {
  display: flex;
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 5vh 10%;
@media screen and (min-width: 630px) {
  margin: 8vh 0px 5vh 0px;
  width: 80%;
}
@media screen and (min-width: 960px) {
  margin-top: 14vh;
}
`;

const Col = styled.div`
flex-basis: 100%;
margin-bottom: 3vh;
transition: 1s ease;
  &:hover {
    -webkit-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
  };
@media screen and (min-width: 630px) {
  flex-basis: 45%;
  margin-left: 3.5%;
}
@media screen and (min-width: 960px) {
  flex-basis: 29%;
}
`;

const ArticleImg = styled.img`
width: 100%;
height: 70%;
padding-bottom: 3%;
cursor: pointer;
`;

const ArticleDesc = styled.div`
display: flex;
height: auto;
padding: 0px 5%;
font-weight: bold;
align-items: center;
justify-content: space-between;
text-align: center;
@media screen and (min-width: 480px) and (max-width: 629px) {
  font-size: 24px;
}
@media screen and (min-width: 800px) and (max-width: 959px) {
  font-size: 20px;
}
@media screen and (min-width: 1100px) {
  font-size: 20px;
}
`;

const ArticleName = styled.a`
width: 50%;
height: fit-content;
color: black;
text-decoration: none;
`;

const ArticlePrice = styled.div`
width: 20%;
height: fit-content;
`;

const ArticleCart = styled.i`
width: 20%;
height: fit-content;
cursor: pointer;
font-size: 28px !important;
`;

const RowFiltros = styled(Row)`
margin: 5vh 0px;
@media screen and (min-width: 630px) {
  width: 20%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
@media screen and (min-width: 960px) {
  width: 13%;
}
@media screen and (min-width: 1100px) {
  width: 10%;
}
`;

const ColFiltros = styled.div`
flex-basis: 40%;
margin: 0px 0px 5vh 10%;
line-height: 25px;
@media screen and (min-width: 630px) {
  flex-basis: 100%;
}
`;

const FilterDiv = styled.div`
display: flex;
flex-direction: row;


align-items: center;
`;

const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 14px;
  height: 14px;
  border: solid black 1px;
  border-radius: 20%;
  cursor: pointer;
  transition: .3s ease;
&:checked {
  background-color: darkgoldenrod;
};
&:focus {
  outline: none;
}
`;

const NoResults = styled.div`
font-size: 26px;
font-weight: bold;
display: flex;
width: 80%;
margin: 0px auto 15vh auto;
line-height: 30px;
text-align: center;
@media screen and (min-width: 630px) {
margin-top: 8vh;
}
@media screen and (min-width: 960px) {
width: 70%;
margin-top: 14vh;
font-size: 32px;
}
`


function navigate(url) {

  window.location.assign(`/FachaShop/${url}`);
}

function Search(props) {

  const [articles, setArticles] = useState(props.articles);

  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('filters')));

  useEffect(() => {

    filter();

  }, []);

  function filter() {

    let articlesFilteredA = [];

    let articlesFilteredB = [];

    const PATHNAME = window.location.pathname.slice(18,).match(/[a-z]*/gi).filter(item => item !== '').join('-');

    let pathArr = PATHNAME.split('-');

    if (PATHNAME === '') {

      articlesFilteredA = props.articles.slice(0,)

    } else {

      for (let i = 0; i < props.articles.length; i++) {

        props.articles[i].tags.split('-').map(val => {

          pathArr.map(pathVal => {

            if (pathVal === val && articlesFilteredA[articlesFilteredA.length - 1] !== props.articles[i]) {

              articlesFilteredA.push(props.articles[i])

            }
          })
        })
      }
    }

    // Filter by gender

    if (storage.gender.length > 0) {

      articlesFilteredA.map(article => {

        storage.gender.map(gender => {

          if (article.gender === gender) {

            articlesFilteredB.push(article)

          };
        })
      })

    } else {

      articlesFilteredB = articlesFilteredA.slice(0,)

    };

    articlesFilteredA = [];

    // Filter by type

    if (storage.type.length > 0) {

      articlesFilteredB.map(article => {

        storage.type.map(type => {

          if (article.type === type) {

            articlesFilteredA.push(article)

          };
        })
      })

    } else {

      articlesFilteredA = articlesFilteredB.slice(0,)

    };

    articlesFilteredB = [];

    // Filter by discount

    if (storage.discount) {

      articlesFilteredA.map(article => {

        if (article.discount) {

          articlesFilteredB.push(article)

        }

      })

    } else {

      articlesFilteredB = articlesFilteredA.slice(0,)

    }

    articlesFilteredA = [];

    // Filter by price

    if (storage.price !== 'undefined') {

      let range = storage.price.match(/[0-9]*/g);

      console.log(range);

      articlesFilteredB.map(article => {

        if (Number(range[0]) <= article.price && article.price <= Number(range[2])) {

          articlesFilteredA.push(article);
        }
      })

    } else {

      articlesFilteredA = articlesFilteredB.slice(0,)

    }

    setArticles(articlesFilteredA);

  }

  function changeFilter(val) {

    switch (val) {

      case 'Hombre':
      case 'Mujer':


        if (storage.gender.some(gender => gender === val)) {

          storage.gender.splice(storage.gender.findIndex(gender => gender === val), 1);

        } else {

          storage.gender.push(val);

        }

        break;

      case 'Campera':
      case 'Remera':
      case 'Pantalon':
      case 'Gorro':

        if (storage.type.some(type => type === val)) {

          storage.type.splice(storage.type.findIndex(type => type === val), 1);

        } else {

          storage.type.push(val);

        }

        break;

      case 'Oferta':

        storage.discount = !storage.discount;

        break;

      default:

        storage.price = val.target.value;

        break;
    }

    localStorage.setItem('filters', JSON.stringify(storage));

    setStorage(JSON.parse(localStorage.getItem('filters')));

    filter();

  }

  return (

    <Container>

      <RowFiltros>

        <ColFiltros>

          <label htmlFor="genero">Género</label>

          <FilterDiv>

            <InputCheckbox checked={storage.gender.some(gender => gender === 'Hombre')} type="checkbox" name="checkbox" onChange={() => changeFilter('Hombre')} />

            <label htmlFor="genero">Hombre</label>

          </FilterDiv>

          <FilterDiv>

            <InputCheckbox checked={storage.gender.some(gender => gender === 'Mujer')} type="checkbox" name="checkbox" onChange={() => changeFilter('Mujer')} />

            <label htmlFor="genero">Mujer</label>

          </FilterDiv>

        </ColFiltros>

        <ColFiltros>

          <label htmlFor="tipo">Tipo de ropa</label>

          <FilterDiv>

            <InputCheckbox checked={storage.type.some(type => type === 'Remera')} type="checkbox" name="checkbox" onChange={() => changeFilter('Remera')} />

            <label htmlFor="tipo">Remera</label>

          </FilterDiv>

          <FilterDiv>

            <InputCheckbox checked={storage.type.some(type => type === 'Gorro')} type="checkbox" name="checkbox" onChange={() => changeFilter('Gorro')} />

            <label htmlFor="tipo">Gorro</label>

          </FilterDiv>

          <FilterDiv>

            <InputCheckbox checked={storage.type.some(type => type === 'Pantalon')} type="checkbox" name="checkbox" onChange={() => changeFilter('Pantalon')} />

            <label htmlFor="tipo">Pantalón</label>

          </FilterDiv>

          <FilterDiv>

            <InputCheckbox checked={storage.type.some(type => type === 'Campera')} type="checkbox" name="checkbox" onChange={() => changeFilter('Campera')} />

            <label htmlFor="tipo">Campera</label>

          </FilterDiv>

        </ColFiltros>

        <ColFiltros>

          <label htmlFor="precios">Rango de precios</label>

          <FilterDiv>

            <select name="Precios" onChange={event => changeFilter(event)}>

              <optgroup label='Rango de precios'>

                <option value='undefined'>Todos</option>

                <option selected={storage.price === '0-500'}>0-500</option>

                <option selected={storage.price === '500-1000'}>500-1000</option>

                <option selected={storage.price === '1000-2500'}>1000-2500</option>

                <option selected={storage.price === '2500-10000'}>2500-10000</option>

              </optgroup>

            </select>

          </FilterDiv>

        </ColFiltros>

        <ColFiltros>

          <label htmlFor="descuento">Con descuento</label>

          <FilterDiv>
            <InputCheckbox checked={storage.discount === true} type="checkbox" name="checkbox" onChange={() => changeFilter('Oferta')} />
          </FilterDiv>

        </ColFiltros>

      </RowFiltros>

      {articles.length > 0 ? <Row>

        {articles.map((item, i) =>

          <Col key={i}>

            <ArticleImg onClick={() => navigate(`article/${item.id}`)} src={item.img} />

            <ArticleDesc>

              <ArticleName href={`/FachaShop/article/${item.id}`}>{item.name}</ArticleName>

              <ArticlePrice>

                {(!item.discount) ? `$${item.price}` :
                  <>
                    <span style={{ textDecorationLine: 'line-through', color: 'red' }}>${item.price}</span>
                    <div>${item.price - item.price * .2}</div>
                  </>
                }

              </ArticlePrice>

              <ArticleCart className='fas fa-cart-plus fa-2x' onClick={() => props.addCart(item.id)}></ArticleCart>

            </ArticleDesc>

          </Col>
        )}
      </Row> :

        <NoResults>Facha 404: No se han encontrado resultados para tu búsqueda</NoResults>
      }
    </Container>
  )
}

export default Search;

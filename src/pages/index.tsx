import React from 'react'
import  FilterByPrice  from '../components/FilterByPrice'
import NavBarHeader from '../components/NavBarHeader'
import ProductList from '../components/ProductList'
import { StylesDiv } from '../styles/pages/indexStyles'

const Home: React.FC = () => {
  return (
    <>
      <NavBarHeader />
      <StylesDiv>
        <FilterByPrice />
        <ProductList />
      </StylesDiv>
      <h2>componente de paginação</h2>
    </>
    )
  }

  export default Home

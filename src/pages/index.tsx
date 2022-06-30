import React from 'react'
import  Logo from '../assets/black.svg'
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
    </>
    )
  }

  export default Home

import React, { useState } from 'react'
import FilterByPrice from '../components/home/FilterByPrice'
import NavBarHeader from '../components/NavBarHeader'
import ProductList from '../components/home/ProductList'
import { StylesDiv } from '../styles/pages/indexStyles'
import { useFetch, UseFetchProps } from '../utils/getAPIWithSwr'
import { DataProps } from '../utils/typesItem'
import CartModal from '../components/CartModal'
import { MainContentDivList } from '../styles/components/ProductListStyles'

const Home = ({data}: any) => {

  const InitialStateGetApi = {
    priceStart: 0,
    priceEnd: 600,
    ProductName: '',
    page: '1',
    type: ''
  }

  const [getApi, setGetApi] = useState<UseFetchProps>({ ...InitialStateGetApi })
  const [modalIsOpen, setIsOpen] = useState(false);
  const [renderData, setRenderData ] = useState(data);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const filtredData = useFetch<DataProps>(getApi).data

  if (!renderData) {
    return <>
      <NavBarHeader setGetApi={setGetApi} getApi={getApi} openModal={openModal} />
      <CartModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <StylesDiv>
        <FilterByPrice setGetApi={setGetApi} getApi={getApi} />
        <MainContentDivList>
          <h1> carregando... </h1>
        </MainContentDivList>
      </StylesDiv>
  </>
  } else {
    return (
      <>
        <NavBarHeader setGetApi={setGetApi} getApi={getApi} openModal={openModal} />
        <CartModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <StylesDiv>
          <FilterByPrice setGetApi={setGetApi} getApi={getApi} />
          <ProductList data={filtredData? filtredData : renderData} setGetApi={setGetApi} getApi={getApi} />
        </StylesDiv>
      </>
    )
  }
}

export const getStaticProps = async () => {
  const response = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9');
  const data = await response.json();
  return {
      props :{
      data
    }
  };
};

export default Home

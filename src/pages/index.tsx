import React, { useEffect, useState } from 'react'
import FilterByPrice from '../components/home/FilterByPrice'
import NavBarHeader from '../components/NavBarHeader'
import ProductList from '../components/home/ProductList'
import { StylesDiv } from '../styles/pages/indexStyles'
import { useFetch, UseFetchProps } from '../utils/getAPIWithSwr'
import { DataProps } from '../utils/typesItem'

const Home: React.FC = () => {
  const InitialStateGetApi = {
    priceStart: 0,
    priceEnd: 600,
    ProductName: '',
    page: '1',
    type: ''
  }

  const [getApi, setGetApi] = useState<UseFetchProps>({ ...InitialStateGetApi })


  const { data } = useFetch<DataProps>(getApi)

  if (!data) {
    return <h1>carregando</h1>
  } else {
    return (
      <>
        <NavBarHeader setGetApi={setGetApi} getApi={getApi} />
        <StylesDiv>
          <FilterByPrice setGetApi={setGetApi} getApi={getApi} />
          <ProductList data={data} setGetApi={setGetApi} getApi={getApi} />
        </StylesDiv>

      </>
    )
  }
}
export default Home

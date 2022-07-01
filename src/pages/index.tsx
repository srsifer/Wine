import React, { useEffect, useState } from 'react'
import  FilterByPrice  from '../components/FilterByPrice'
import NavBarHeader from '../components/NavBarHeader'
import ProductList from '../components/ProductList'
import { StylesDiv } from '../styles/pages/indexStyles'
import { useFetch, UseFetchProps } from '../utils/getAPIWithSwr'



const Home: React.FC = () => {
  const [getApi, setGetApi] = useState<UseFetchProps>({
    priceStart: undefined,
    priceEnd: undefined,
    ProductName: undefined,
    page: undefined,
  })

  const {data} = useFetch(getApi)

  if(!data){
      return <h1>carregando</h1>
    }else{
      return (
        <>
          <NavBarHeader />
          <StylesDiv>
             <FilterByPrice  setGetApi={setGetApi} getApi={getApi} />
            <ProductList data={data} />
          </StylesDiv>
          <h2>componente de paginação</h2>
        </>
        )
      }

    }
  export default Home

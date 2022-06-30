import React from 'react'
import { DivProductsFound, MainContentDivList, ProductListStylesDiv } from '../styles/components/ProductListStyles'
import { useFetch } from '../utils/getAPIWithSwr'
import { DataProps } from '../utils/typesItem'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
  const {data} = useFetch<DataProps>('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
  console.log(data)

  if(!data) {
    return <h1>carregando ...</h1>
  }

  return (
    <MainContentDivList>
    <DivProductsFound>
      <h3>{`${data.totalItems} produtos foram encontrados`}</h3>
    </DivProductsFound>
    <ProductListStylesDiv>
      {
        data.items.map((item) => {
          return(
            <ProductCard item={item}/>
          )
        })
      }
    </ProductListStylesDiv>
    </MainContentDivList>
  )
}

export default ProductList

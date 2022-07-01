import React from 'react'
import { DivProductsFound, MainContentDivList, ProductListStylesDiv } from '../styles/components/ProductListStyles'
import { useFetch } from '../utils/getAPIWithSwr'
import { DataProps } from '../utils/typesItem'
import ProductCard from './ProductCard'

const ProductList = ({data}: any) => {
  return (
    <MainContentDivList>
      <DivProductsFound>
        <h3>{`${data.totalItems} produtos foram encontrados`}</h3>
      </DivProductsFound>
    <ProductListStylesDiv>
        {
        data.items.map((item: any) => {
          return(
            <ProductCard key={item.id} item={item}/>
          )
        })
      }
    </ProductListStylesDiv>
    </MainContentDivList>
  )
}

export default ProductList

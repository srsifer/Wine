import React from 'react'
import { DivProductsFound, MainContentDivList, ProductListStylesDiv } from '../../styles/components/ProductListStyles'
import { DataProps } from '../../utils/typesItem'
import Pagination from './Pagination'
import ProductCard from './ProductCard'

interface ProductListProps {
  data: DataProps;
  getApi: object;
  setGetApi: Function;
}

const ProductList = ({data, getApi, setGetApi}: ProductListProps) => {
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
    <Pagination limit={data.itemsPerPage} current={data.page} pages={data.totalPages} currentPage={data.page} setGetApi={setGetApi} getApi={getApi}/>
    </MainContentDivList>
  )
}

export default ProductList

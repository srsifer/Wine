import React from 'react'
import { FilterPriceUlStyles, FilterStylesDiv } from '../styles/components/FilterByPriceStyles'

const FilterByPrice: React.FC = () => {
  return (
    <FilterStylesDiv>
      <div>
        <h2>Refine sua busca</h2>
        <h4> por preço</h4>
      </div>
      <FilterPriceUlStyles>
      <label name="filter-price" />
        <li>
          <input type="radio" name='filter-price'/>
          <p>Até R$ 40</p>
        </li>
      <label name="filter-price" />
        <li>
          <input type="radio" name='filter-price'/>
          <p>R$ 40 A R$ 60</p>
        </li>

      <label name="filter-price" />
        <li>
          <input type="radio" name='filter-price'/>
          <p>R$ 100 A R$ 200</p>
        </li>

      <label name="filter-price" />
        <li>
          <input type="radio" name='filter-price'/>
          <p>R$ 200 A R$ 500</p>
        </li>

      <label name='filter-price' />
        <li>
          <input type="radio" name='filter-price'/>
          <p>A cima de R$ 500</p>
        </li>

    </FilterPriceUlStyles>
    </FilterStylesDiv>
  )
}

export default FilterByPrice

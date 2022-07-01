import { FilterPriceUlStyles, FilterStylesDiv } from '../styles/components/FilterByPriceStyles'


interface changeStateToFetchProps {
  setGetApi: Function,
  getApi: object,

}

const FilterByPrice = ({setGetApi, getApi, }: changeStateToFetchProps): JSX.Element  => {
  const filterPrice = (priceStart: number, priceEnd: number ) => {

    setGetApi({...getApi, priceStart, priceEnd, type: 'priceFilter'})
  }

  return (
    <FilterStylesDiv>
      <div>
        <h2>Refine sua busca</h2>
        <h4> por preço</h4>
      </div>
      <FilterPriceUlStyles>
      <label>
        <li>
          <input
            onClick={() => filterPrice(0,40)}
            type="radio"
            name='filter-price'/>
          <p>Até R$ 40</p>
        </li>
        </label>
      <label >
        <li>
          <input
            onClick={() => filterPrice(40,60)}
            type="radio"
            name='filter-price'/>
          <p>R$ 40 A R$ 60</p>
        </li>
      </label>
      <label  >
        <li>
          <input
            onClick={() => filterPrice(100,200)}
            type="radio"
            name='filter-price'/>
          <p>R$ 100 A R$ 200</p>
        </li>
      </label>
      <label  >
        <li>
          <input
            onClick={() => filterPrice(200,500)}
            type="radio"
            name='filter-price'/>
          <p>R$ 200 A R$ 500</p>
        </li>
      </label>
      <label >
        <li>
          <input
            onClick={() => filterPrice(500, 1000)}
            type="radio"
            name='filter-price'/>
          <p>A cima de R$ 500</p>
        </li>
      </label>
    </FilterPriceUlStyles>
    </FilterStylesDiv>
  )
}

export default FilterByPrice

import styled from 'styled-components'

export const FilterStylesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  min-width: max-content;
  max-width: max-content;
  h2 {
    margin-bottom: 40%;
  }
  h4{
    margin-bottom: 10px;
  }

`

export const FilterPriceUlStyles = styled.ul`
  list-style: none;
  li{
    display: flex;
    align-items: center;
    p{
      margin: 5px;
      padding: 5px;
    }
  }
`

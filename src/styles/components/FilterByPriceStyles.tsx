import styled from 'styled-components'

export const FilterStylesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid green;
  padding: 40px;
  max-width: max-content;
  h2 {
    margin-bottom: 15px;
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

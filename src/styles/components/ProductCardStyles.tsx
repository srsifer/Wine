import styled from 'styled-components'

export const ProductCardDisplay = styled.div`
margin: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
text-align: center;
  button {
    background-color: #7EBC43;
    color: white;
    width: 100%;
    font-weight: bolder;
    border: none;
    border-radius: 4px;
    margin: 8% 4% 4% 4%;
    padding: 4%;
    :hover {
      transform:scale(1.1);
    }
  }

  svg {
    position: relative;
    margin-left: -20px;
  }
`;

export const DisplayCardInfo = styled.div`

img {
    max-width: 198.57px;
    max-height: 178.13px;
  }

  max-width: 256px;
  max-height: 387px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DivPriceAndDiscount = styled.div`
  display: flex;
  padding: 2%;
  p{
    text-decoration-line: line-through;
  }
  div{

    background-color: #f79552;
    color: white;
    margin-left: 10px;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 4px;
  }
`

export const DivPriceMember = styled.div`
  display: flex;
  font-weight: bold;
  padding: 2%;
  div {
    color: #b6116e;
    margin-left: 8px;
    padding-bottom: 4px;
  }
`;

export const DivPriceNoMember = styled.div`
display: flex;
color: #8f8f8f;
font-size: 12px;
padding: 2%;
div: {
  margin-left: 8px;
}
`

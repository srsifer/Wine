import styled from 'styled-components';

export const ModalStylesDiv = styled.div`
    top: 50px;
    background-color: #f5f5f5;
`

export const DivHeaderModal = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 40px;
  button{
    background-color: #f5f5f5;
    border: none;
    :hover{
      transform: scale(1.2);
    }
  }
`
export const DivEmptyCartMenssage = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c81a78;
  h2{
    margin: 10px;
  }
`

export const DivcardItemCart = styled.div`
  position: relative;
  top: 12px;
  width:318px;
  height: 110px;
  margin-top: 12px;
  margin-bottom: 12px;
  display:flex;
  img{
    max-width: 100;
    max-height: 100%;
  }
`;

export const DivInformationOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 238px;
  height: 111px;
`
export const DivNameAndRemoveItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  button {
    border-radius: 150%;
    background-color: white;
    color: black;
    min-width: 30px;
    height: 30px;
    border: none;
    font-size: 20px;
    font-weight: bolder;
    :hover {
      background-color: red;
      color: white;
    }
}
`
export const DivPriceAndTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h2{
    color: #c81a78;
  }
`

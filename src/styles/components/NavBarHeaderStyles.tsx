import styled from 'styled-components'

export const HeaderStyles = styled.header`
  width: 100%;
  display: flex;
  padding: 12px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 0.5px solid #CCCCCC;
  box-shadow: rgba(0, 0, 0, 0.15) 0  3px 3px;
  min-width: fit-content;
  label {
    :hover {
      transform: scale(1.1)
    }
  }
`;

export const UlStyles = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 25%;
`
export const SectionSvgStyles = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
`
export const SeatchProduct = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-width: 10vw;
   width: 15vw;

  input {
    border: 1px solid;
    border-radius: 2rem;
    background-color: #ffffff52;
    width: 15vw;
    height: 6vh;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }
  button{
    text-align: center;
    background-color: #ffffff;
    border-radius: 100%;
    position: relative;
    margin-left: -75px;
    :hover{
      transform: none;
    }
  }

`;

export const ButtonSearchStyles = styled.button`
  border: none;
  position: relative;
  margin-left: +12vw;
  background: none;
`
export const SectionCartStyles = styled.section`
  background-color: #f9b950;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  img {
    border-radius: 0 0 16% 16%;
  }

  :hover {
    color: blue;
    transform: scale(1.1);
  }

`

export const DivCountStyles = styled.div`
position: absolute;
left: 64.29%;
right: 0%;
top: 65.50%;
bottom: 0%;
background: #FFFFFF;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;


  border-radius: 150%;
  font-weight: bolder;
  color: #4fbfa5;
`

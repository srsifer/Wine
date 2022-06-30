import styled from 'styled-components'

export const HeaderStyles = styled.header`
  width: 100%;
  display: flex;
  padding: 12px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
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

export const ButtonSearchStyles = styled.button`
  border: none;
  background: none;
  :hover {
    color: blue;
    transform: scale(1.1);
  }
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
  z-index: 2;
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

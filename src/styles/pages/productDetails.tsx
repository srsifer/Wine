import styled from 'styled-components'

export const MainContentStylesDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8vh;
  svg{
    :hover{
      transform: scale(1.3);
    }
  }
`

export const DivContentStyles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 60vh;

`
export const SectionImageStyles = styled.section`
  img{
    max-width: 400px;
    height: 68vh;
    top: 1px;
  }
`;

export const DescriptionDetailsSection = styled.section`
  max-width: 462px;
  max-height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  img {
    width: 30px;
    height: 30px;
  }

`

export const LocationStatusDiv = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 1em;
    margin-right: 1em;
  }
  h5{
    color: #ce3588;
  }
  p{
    color: #c5c5c5;
  }
`

export const DivTagDescription = styled.div`
  display: flex; flex-direction: row;
  align-items: center;
  p{
    margin: 8px;
  }
`

export const DivButtons = styled.div`
margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: fit-content;
  background-color: #7EBC43;
  width: 70%;
  height: 4em;
  border-radius: 8px;
  color: white;
  button{
    background-color: #7EBC43;
    border: none;
    margin: 18px;
    color: white;
 }
`;
export const DivAddButton = styled.div`
  border-left: 2px solid #24232352;
  p {
    font-size: 18px;
    font-weight: bolder;
  }
  button{
    margin-left: 3em;
    :hover{
      transform: scale(1.2);
    }
  }
`
export const DivpricesDetails = styled.div`
margin-bottom: 12px;
  div{
    display: flex;
    align-items: baseline;
    font-size: 26px;
    font-weight: 800;
  }
  h2{
    color:#C81A78;

  }
  h3{
    margin: 4px;
    color:#C81A78;
  }
  p{
    color: #888888;
  }
`

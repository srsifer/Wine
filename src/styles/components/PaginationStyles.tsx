import styled from "styled-components";

export const UlButtonsPagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;

`

interface CurrentButtonProps {
  current: number
  page: number
}

export const CurrentButton = styled.button<CurrentButtonProps>`
  width: 4vw;
  height: 4vh;
  border-radius: 3px;
  border-color: #B6116E;
  margin: 1em;
  font-weight: 900;
  font-size: 16px;
  border: 1px solid;
  background-color: ${(props) => props.current === props.page ? '#B6116E' : 'white'} !important;
  color: ${(props) => props.current === props.page ? 'white' : '#B6116E'} !important;
`;

export const NextPageStylesButton = styled.button`
  width: 4vw;
  height: 4vh;
  border: none ;
  background-color: ${({ theme }) => theme.colors.backgroud};
  :hover {
      transform: scale(1.1)
    }
`
export const PreviousButtonStyles = styled.button`
  width: 4vw;
  height: 4vh;
  svg{
    transform: rotate(180deg);
    margin-right: 5px;
  }

  display: flex;
  align-items: center;
  border: none ;
  font-weight: 900;
  background-color: ${({ theme }) => theme.colors.backgroud};
  color: #B6116E;
  :hover {
      transform: scale(1.1)
    }
`

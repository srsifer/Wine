import Link from 'next/link'
import React, { useState } from 'react'
import LogoWineBlack from '../assets/LogoWineBlack.svg'
import Busca from '../assets/BuscaLupa.svg'
import Perfil from '../assets/perfil.svg'
import Cart from '../assets/Bitmap.png'
import Image from 'next/image'
import {
  ButtonSearchStyles,
  DivCountStyles,
  HeaderStyles,
  SeatchProduct,
  SectionCartStyles,
  SectionSvgStyles,
  UlStyles
} from '../styles/components/NavBarHeaderStyles'



const { src, width, height, blur }: any = Cart;

interface changeStateToFetchProps {
  setGetApi: Function,
  getApi: object,
}
interface States {
  value: string
}
export default function NavBarHeader({ setGetApi, getApi }: changeStateToFetchProps) {
  const [textFilter, setTextFilter] = useState<States>({ value: '' })
  const [displaySearc, setDisplay] = useState(true)

  const handleChange = (value: any) => {
    setTextFilter(value)
  }

  const toggleDisplay = () => {
    setDisplay(!displaySearc)
  }

  const filterByText = () => {
    setGetApi({ ...getApi, ProductName: textFilter, type: 'textFilter' })
    toggleDisplay()
  }

  return (
    <HeaderStyles>
      <label htmlFor="Home">
        <Link href="./">
          <a><LogoWineBlack /></a>
        </Link>
      </label>

      <UlStyles>
        <li>Clube</li>
        <li>Loja</li>
        <li>Produtores</li>
        <li>Ofertas</li>
        <li>Eventos</li>
      </UlStyles>

      <SectionSvgStyles>

        <label>
          <SeatchProduct>
            <input
              hidden={displaySearc}
              onChange={(e) => handleChange(e.target.value)}
              type="text" />
            <ButtonSearchStyles
              hidden={displaySearc}
              onClick={filterByText}
            >
              <Busca />
            </ButtonSearchStyles>
          </SeatchProduct>
          <ButtonSearchStyles
            hidden={!displaySearc}
            onClick={toggleDisplay}
            type='button'
          >
            <Busca />
          </ButtonSearchStyles>
        </label>

        <Perfil />
        <label htmlFor="cart">
          <SectionCartStyles>
            <Image src={src} width={width} height={height} placeholder={blur} />
            <DivCountStyles><p>0</p></DivCountStyles>
          </SectionCartStyles>
        </label>
      </SectionSvgStyles>
    </HeaderStyles>
  )
}

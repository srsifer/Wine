import Link from 'next/link'
import React from 'react'
import LogoWineBlack from '../assets/LogoWineBlack.svg'
import Busca from '../assets/BuscaLupa.svg'
import Perfil from '../assets/perfil.svg'
import Cart from '../assets/Bitmap.png'
import Image from 'next/image'
import { ButtonSearchStyles, DivCountStyles, HeaderStyles, SectionCartStyles, SectionSvgStyles,  UlStyles } from '../styles/components/NavBarHeaderStyles'


const { src, width, height,blur }: any = Cart;

export default function NavBarHeader() {
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
        <ButtonSearchStyles>
        <Busca />
        </ButtonSearchStyles>
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

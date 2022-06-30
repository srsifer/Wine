import React from 'react'
import BlackFriday from '../assets/black.svg'
import { DisplayCardInfo, DivPriceAndDiscount, DivPriceMember, DivPriceNoMember, ProductCardDisplay } from '../styles/components/ProductCardStyles';
interface ProductCardProps {
  item: {
      id: number;
      image: string;
      name: string;
      price: number;
      priceMember: number;
      priceNonMember: number;
      discount: number;
  }
}

export default function ProductCard({item}: ProductCardProps) {
  return (
    <ProductCardDisplay>
      <DisplayCardInfo key={item.id}>
      <div>
        <img src={item.image} alt={`imagem do vinho ${item.name}`} />
        <BlackFriday  />
      </div>
      <h3>{item.name}</h3>
      <DivPriceAndDiscount>
        <p>{`R$ ${item.price}`}</p>
        <div>
          {`${item.discount} % OFF`}
        </div>
      </DivPriceAndDiscount>
      <DivPriceMember>
        <p>SÓCIO WINE </p>
        <div>{`R$${item.priceMember}`}</div>
      </DivPriceMember>
      <DivPriceNoMember>
        <p>NÃO SÓCIO</p>
        <div>{`R$${item.priceNonMember}`}</div>
      </DivPriceNoMember>
    </DisplayCardInfo>
    <button>
      Adicionar
    </button>
    </ProductCardDisplay>
  )
}

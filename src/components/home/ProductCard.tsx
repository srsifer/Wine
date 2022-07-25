import Link from 'next/link';
import React, { useContext } from 'react'
import BlackFriday from '../../assets/black.svg'
import { MyContext } from '../../provider/Store';
import {
  DisplayCardInfo,
  DivPriceAndDiscount,
  DivPriceMember,
  DivPriceNoMember,
  ProductCardDisplay
} from '../../styles/components/ProductCardStyles';
import { AddToCart } from '../../utils/hooks';
import { ProductCardProps } from '../../utils/typesItem';

export default function ProductCard({ item }: ProductCardProps) {
  const { setGlobalState } = useContext(MyContext)

  const createObjectOrder = () => {
    const { name, priceMember, id, image } = item;
    const objectOrder = {
      id,
      name,
      image,
      priceMember,
      quantity: 1
    }
    return objectOrder;
  }

  return (
    <ProductCardDisplay>
      <DisplayCardInfo key={item.id}>
        <div>
          <Link href={`./ id=${item.id} name=${item.name}`}>
            <a>
              <img src={item.image} alt={`imagem do vinho ${item.name}`} />
              <BlackFriday />
            </a>
          </Link>
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
      <button
        onClick={() => AddToCart(createObjectOrder(), setGlobalState)}
      >
        Adicionar
      </button>
    </ProductCardDisplay>
  )
}

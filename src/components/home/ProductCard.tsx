import Link from 'next/link';
import React, { useState } from 'react'
import BlackFriday from '../../assets/black.svg'
import {
  DisplayCardInfo,
  DivPriceAndDiscount,
  DivPriceMember,
  DivPriceNoMember,
  ProductCardDisplay
} from '../../styles/components/ProductCardStyles';

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

export default function ProductCard({ item }: ProductCardProps) {
  const createObjectOrder = () => {
    const { name, priceMember, id } = item;
    const objectOrder = {
      id,
      name,
      priceMember,
      quantity: 1
    }
    return objectOrder;
  }

  const AddToCart = () => {
    const itemOrder = createObjectOrder()
    const AllProducts = JSON.parse(localStorage.getItem('allProducts') || '[]')
    console.log(typeof AllProducts);

    if (AllProducts.length == 0) {
      console.log("entrei no if")
     return localStorage.setItem('allProducts', JSON.stringify([itemOrder]))
    }
    console.log('não terminei')
    const itemFound = AllProducts.find((item: typeof itemOrder) => item.id === itemOrder.id);

    if (itemFound) {
      AllProducts.forEach((localitem: typeof itemOrder) => {
        if (localitem.id === itemOrder.id) {
          localitem.priceMember += itemOrder.priceMember
          localitem.quantity += 1
        }
      })
    }

    if (itemFound == undefined) {
      console.log("entrei na terceira condição")
      AllProducts.push(itemOrder)
      console.log(AllProducts)
    }
    localStorage.setItem('allProducts', JSON.stringify(AllProducts))
    console.log(itemFound)
  }

  return (
    <ProductCardDisplay>
      <DisplayCardInfo key={item.id}>
        <div>
          <Link href={`./${item.id}`}>
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
        onClick={AddToCart}
      >
        Adicionar
      </button>
    </ProductCardDisplay>
  )
}

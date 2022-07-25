import React, { useContext, useState } from 'react'
import StarRatings from 'react-star-ratings'
import ButtonCoutAdd from '../../assets/buttonCountAdd.svg';
import ButtonCoutRemove from '../../assets/buttonCountRemove.svg'
import ArrowLeft from '../../assets/arrowLeft.svg'
import { MyContext } from '../../provider/Store';
import { AboutProductProps, ItemOrder } from '../../utils/typesItem';
import { AddToCart } from '../../utils/hooks';
import {
  DescriptionDetailsSection,
  DivAddButton,
  DivButtons,
  DivpricesDetails,
  DivTagDescription,
  LocationStatusDiv 
} from '../../styles/pages/productDetails'

export const AboutProduct = ({ data }: AboutProductProps) => {
  const { setGlobalState } = useContext(MyContext)
  const initialState = {
    id: data.id,
    name: data.name,
    image: data.image,
    quantity: 1,
    priceMember: data.priceMember,
  }

  const [ObjectOrder, setObjectOrder] = useState<ItemOrder>(initialState)

  const AddToCartFromDetailsProduct = () => {
    AddToCart(ObjectOrder, setGlobalState )
    setObjectOrder(initialState)
  }

  const setQuantityDown = () => {
    const {quantity} = ObjectOrder;
    const newquantity = quantity -1
    if(quantity >= 1){
      setObjectOrder({ ...ObjectOrder, quantity: newquantity })
    }
  }

  const setQuantityUp = () => {
    const {quantity} = ObjectOrder;
    const newquantity = quantity + 1
    setObjectOrder({...ObjectOrder, quantity: + newquantity })
  }

  const textFormater = (price: number) => {
    return Number(price).toFixed(2).replace('.', ',')
  }

  return (
    <DescriptionDetailsSection>
      <LocationStatusDiv>
        <h5>vinhos</h5>
        <ArrowLeft />
        <h5>{data.country}</h5>
        <ArrowLeft />
        <p>{data.region}</p>
      </LocationStatusDiv>
      <h1>{data.name}</h1>
      <DivTagDescription>
        <img src={data.flag} alt={`imagem da bandeira de ${data.country}`} />
        <p>{data.country}</p>
        <p>{data.type}</p>
        <p>{data.size}</p>

        <StarRatings
          rating={data.rating}
          starRatedColor="#f9b950"
          starDimension="20px"
          starSpacing="5px"
          numberOfStars={5}
          name='rating'
        />
        <p title='Avaliações'>{`(${data.avaliations ? data.avaliations : '0'})`}</p>
      </DivTagDescription>
      <DivpricesDetails>
        <div>
          <h3>R$</h3>
          <h2>{textFormater(data.priceMember)}</h2>
        </div>
        <p>{` NÃO SÓCIO ${textFormater(data.priceNonMember)}/UN`}</p>
      </DivpricesDetails>
      <h3>comentario do somelier</h3>
      <p>{data.sommelierComment}</p>
      <DivButtons>
        <button
          onClick={ () => setQuantityDown()}
        >
          <ButtonCoutRemove />
          </button>
        <p>{ObjectOrder.quantity}</p>
        <button
          onClick={ () => setQuantityUp()}
        >
          <ButtonCoutAdd />
          </button>
        <DivAddButton>
          <button
          onClick={ () => AddToCartFromDetailsProduct()}
          >
            <p>Adicionar</p>
          </button>
        </DivAddButton>
      </DivButtons>
    </DescriptionDetailsSection>
  )
}

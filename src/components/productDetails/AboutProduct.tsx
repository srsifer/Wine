import React, { useContext, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { DescriptionDetailsSection, DivAddButton, DivButtons, DivpricesDetails, DivTagDescription, LocationStatusDiv } from '../../styles/pages/productDetails'
import ButtonCoutAdd from '../../assets/buttonCountAdd.svg';
import ButtonCoutRemove from '../../assets/buttonCountRemove.svg'
import ArrowLeft from '../../assets/arrowLeft.svg'
import { MyContext } from '../../provider/Store';

interface AboutProductProps {

  data: {
    avaliations: number;
    classification: string;
    country: string;
    discount: number;
    flag: string;
    id: number;
    image: string;
    name: string;
    price: number;
    priceMember: number;
    priceNonMember: number;
    rating: number;
    region: string;
    size: string;
    sommelierComment: string;
    type: string;
  }
}

interface StateObjectOrder {
  id: number
  name: string
  image: string
  priceMember: number
  quantity: number,
}


export const AboutProduct = ({ data }: AboutProductProps) => {
  const initialState = {
    id: data.id,
    name: data.name,
    image: data.image,
    quantity: 1,
    priceMember: data.priceMember,
  }
  const { setGlobalState} = useContext(MyContext)
  const [ObjectOrder, setObjectOrder] = useState<StateObjectOrder>(initialState)


  const AddToCart = () => {
    const AllProducts = JSON.parse(localStorage.getItem('allProducts') || '[]')

    if (AllProducts.length == 0) {
      const { priceMember, quantity} = ObjectOrder
      const newPriceMember = priceMember * quantity
      setObjectOrder({...ObjectOrder, priceMember: newPriceMember})
      setGlobalState([ ObjectOrder ])
      localStorage.setItem('allProducts', JSON.stringify([ObjectOrder]))
      setObjectOrder(initialState)
    }

    const itemFound = AllProducts.find((item: typeof ObjectOrder) => item.id === ObjectOrder.id);

    if (itemFound) {
      AllProducts.forEach((localitem: typeof ObjectOrder) => {
        if (localitem.id === ObjectOrder.id) {
          localitem.priceMember += (ObjectOrder.priceMember * localitem.quantity),
          localitem.quantity+= ObjectOrder.quantity
        }
      })
    }

    if (itemFound == undefined) {

      AllProducts.push(ObjectOrder)

    }
    setGlobalState(AllProducts)
    localStorage.setItem('allProducts', JSON.stringify(AllProducts));
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
          <h2>{Number(data.priceMember).toFixed(2).replace('.', ',')}</h2>
        </div>
        <p>{` NÃO SÓCIO ${Number(data.priceNonMember).toFixed(2).replace('.', ',')}/UN`}</p>
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
          onClick={ () => AddToCart()}
          >
            <p>Adicionar</p>
          </button>
        </DivAddButton>
      </DivButtons>
    </DescriptionDetailsSection>
  )
}

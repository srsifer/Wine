import React from 'react'
import StarRatings from 'react-star-ratings'
import { DescriptionDetailsSection, DivAddButton, DivButtons, DivpricesDetails, DivTagDescription, LocationStatusDiv } from '../../styles/pages/productDetails'
import ButtonCoutAdd from '../../assets/buttonCountAdd.svg';
import ButtonCoutRemove from '../../assets/buttonCountRemove.svg'
import ArrowLeft from '../../assets/arrowLeft.svg'

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

export const AboutProduct = ({ data }: AboutProductProps) => {
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
        <button><ButtonCoutRemove /></button>
        <p>count</p>
        <button><ButtonCoutAdd /></button>
        <DivAddButton>
          <button>
            <p>Adicionar</p>
          </button>
        </DivAddButton>
      </DivButtons>
    </DescriptionDetailsSection>
  )
}

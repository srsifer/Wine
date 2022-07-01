import React, { useState} from 'react'
import { useRouter } from 'next/router';
import StarRatings from 'react-star-ratings';
import { useFetch, UseFetchProps } from '../utils/getAPIWithSwr';
import NavBarHeader from '../components/NavBarHeader';
import { DataProps } from '../utils/typesItem';
import PrevPageIcon from '../assets/prevPageIcon.svg'
import ButtonCoutAdd from '../assets/buttonCountAdd.svg';
import ButtonCoutRemove from '../assets/buttonCountRemove.svg'
import Link from 'next/link';
import { DescriptionDetailsSection, DivAddButton, DivButtons, DivContentStyles, DivpricesDetails, DivTagDescription, LocationStatusDiv, MainContentStylesDiv, SectionImageStyles } from '../styles/pages/productDetails';
import ArrowLeft from '../assets/arrowLeft.svg'
const productDetails = () => {
  const router = useRouter().query.id;
  console.log(router)
  const [getApi, setGetApi] = useState<UseFetchProps>({
    priceStart: 0,
    priceEnd: 600,
    ProductName: '',
    page: '1',
    type: 'textFilter'
  })


  const { data } = useFetch<DataProps>(getApi)

  if (!data) {
    return <h1>carregando</h1>
  } else {
    return (
      <>
        <NavBarHeader setGetApi={setGetApi} getApi={getApi} />
        <MainContentStylesDiv>
          <Link href={'/'}>
            <a>
              <PrevPageIcon />
            </a>
          </Link>
          {
            data.items.filter(item => (Number(router) == item.id))
              .map(item => (
                <DivContentStyles
                  key={item.id}>
                  <SectionImageStyles>
                    <img src={item.image} alt={`imagem do vinho ${item.name}`} />
                  </SectionImageStyles>
                  <DescriptionDetailsSection>
                    <LocationStatusDiv>
                      <h5>vinhos</h5>
                      <ArrowLeft />
                      <h5>{item.country}</h5>
                      <ArrowLeft />
                      <p>{item.region}</p>
                    </LocationStatusDiv>
                    <h1>{item.name}</h1>
                    <DivTagDescription>
                      <img src={item.flag} alt={`imagem da bandeira de ${item.country}`} />
                      <p>{item.country}</p>
                      <p>{item.type}</p>
                      <p>{item.size}</p>

                      <StarRatings
                        rating={item.rating}
                        starRatedColor="#f9b950"
                        starDimension="20px"
                        starSpacing="5px"
                        numberOfStars={5}
                        name='rating'
                      />
                      <p title='Avaliações'>{`(${item.avaliations ? item.avaliations : '0'})`}</p>
                    </DivTagDescription>
                    <DivpricesDetails>
                      <div>
                        <h3>R$</h3>
                        <h2>{Number(item.priceMember).toFixed(2).replace('.', ',')}</h2>
                      </div>
                      <p>{` NÃO SÓCIO ${Number(item.priceNonMember).toFixed(2).replace('.', ',')}/UN`}</p>
                    </DivpricesDetails>
                    <h3>comentario do somelier</h3>
                    <p>{item.sommelierComment}</p>
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
                </DivContentStyles>
              ))
          }
        </MainContentStylesDiv>
      </>
    )
  }
}

export default productDetails;

import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useFetch, UseFetchProps } from '../utils/getAPIWithSwr';
import NavBarHeader from '../components/NavBarHeader';
import { DataProps } from '../utils/typesItem';
import PrevPageIcon from '../assets/prevPageIcon.svg'
import Link from 'next/link';
import {
  DivContentStyles,
  MainContentStylesDiv,
  SectionImageStyles
} from '../styles/pages/productDetails';
import { AboutProduct } from '../components/productDetails/AboutProduct';

const productDetails = () => {
  const router = useRouter().query.id;

  const [getApi, setGetApi] = useState<UseFetchProps>({
    priceStart: 0,
    priceEnd: 600,
    ProductName: '',
    page: '1',
    type: 'AllApi'
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
                  <AboutProduct data={data.items[Number(router)]} />
                </DivContentStyles>
              ))
          }
        </MainContentStylesDiv>
      </>
    )
  }
}

export default productDetails;

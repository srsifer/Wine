import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useFetch, UseFetchProps } from '../utils/getAPIWithSwr';
import NavBarHeader from '../components/NavBarHeader';
import { AboutProductProps, DataProps } from '../utils/typesItem';
import PrevPageIcon from '../assets/prevPageIcon.svg'
import Link from 'next/link';
import {
  DivContentStyles,
  MainContentStylesDiv,
  SectionImageStyles
} from '../styles/pages/productDetails';
import { AboutProduct } from '../components/productDetails/AboutProduct';
import CartModal from '../components/CartModal';
import { GetStaticPaths, GetStaticProps } from 'next';

const productDetails = ({data}: AboutProductProps) => {
  const router = useRouter().query.id;
  const {isFallback} = useRouter()




  const [getApi, setGetApi] = useState<UseFetchProps>({
    priceStart: 0,
    priceEnd: 600,
    ProductName: '',
    page: '1',
    type: 'AllApi'
  })

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  //const { data } = useFetch<DataProps>(getApi)

  if (isFallback) {
    return (
    <>
    <NavBarHeader setGetApi={setGetApi} getApi={getApi} openModal={openModal} />
        <CartModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <MainContentStylesDiv>
          <Link href={'/'}>
            <a>
              <PrevPageIcon />
            </a>
          </Link>
          </MainContentStylesDiv>
      </>
    )
  } else {
    return (
      <>
        <NavBarHeader setGetApi={setGetApi} getApi={getApi} openModal={openModal} />
        <CartModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <MainContentStylesDiv>
          <Link href={'/'}>
            <a>
              <PrevPageIcon />
            </a>
          </Link>
          {
            data.map((item: AboutProductProps['data']) => (
                <DivContentStyles
                  key={item.id}>
                  <SectionImageStyles>
                    <img src={item.image} alt={`imagem do vinho ${item.name}`} />
                  </SectionImageStyles>
                  <AboutProduct data={item} />
                </DivContentStyles>
              ))
          }
        </MainContentStylesDiv>
      </>
    )
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9')
  const data = await response.json();
  
 const paths = data.items.map((iten: { name: any; }) => {
  return { params: { id: iten.name }}
 })
console.log(paths)
 return {
   paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const productId = id?.slice(4, 6)
  const productName = id?.slice(6);
  
  const response = await fetch(`https://wine-back-test.herokuapp.com/products?page=1&limit=&${productName}`)
  let data = await response.json();
  data = data.items.filter((item: AboutProductProps['data']) => item.id == Number(productId))
  
  return {
    props:{
      data
    }
  }
}

export default productDetails;

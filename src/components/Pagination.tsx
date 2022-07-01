import React from 'react'
import { CurrentButton, NextPageStylesButton, PreviousButtonStyles, UlButtonsPagination } from '../styles/components/PaginationStyles';
import NextPageButton from '../assets/nextPageButton.svg'
import ArrowLeft from '../assets/arrowLeft.svg'

const BUTTONS_QUANTITY: number = 5;
const MAX_BUTTONS_LEFT: number = (BUTTONS_QUANTITY - 1) / 2;

interface PaginationProps {
  limit: number;
  pages: number;
  getApi: object;
  setGetApi: Function
  current: number;
  currentPage: number,
}


const Pagination = ({ limit, pages, current, getApi, setGetApi, currentPage }: PaginationProps) => {
  const first = Math.max(current - MAX_BUTTONS_LEFT, 1);

  const onPageChanged = (page: number) => {
    setGetApi({ ...getApi, page })

  }

  return (
    <UlButtonsPagination>
      <li>
        <PreviousButtonStyles
          onClick={() => onPageChanged(currentPage -1)}
          hidden={current === 1}
        >
          <ArrowLeft />
          Anterior
        </PreviousButtonStyles>
      </li>
      {Array.from({ length: Math.min(BUTTONS_QUANTITY, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <CurrentButton
              current={currentPage}
              page={page}
              onClick={() => onPageChanged(page)}
              hidden={page > pages}
            >
              {page}
            </CurrentButton>
          </li>
        ))
      }
      <li>
        <NextPageStylesButton
          onClick={() => onPageChanged(currentPage +1)}
          hidden={current === pages}
        >
          <NextPageButton/>
        </NextPageStylesButton>
      </li>
    </UlButtonsPagination>
  )
}

export default Pagination;

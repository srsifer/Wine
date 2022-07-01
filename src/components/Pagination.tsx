import React from 'react'

const BUTTONS_QUANTITY: number = 5;
const MAX_BUTTONS_LEFT: number = (BUTTONS_QUANTITY - 1) / 2;

interface PaginationProps {
  limit: number;
  pages: number;
  getApi: object;
  setGetApi: Function
  current: number;
}


const Pagination = ({ limit, pages, current, getApi, setGetApi}: PaginationProps) => {
  const first = Math.max(current - MAX_BUTTONS_LEFT, 1);

  const onPageChanged = (page: number) => {
    setGetApi({...getApi, page})

  }

  return (
    <ul>
        <li>
          <button
            onClick={() => onPageChanged(1)}
            hidden={current === 1}
          >
            primeira pagina
          </button>
        </li>
        {Array.from({ length:  Math.min(BUTTONS_QUANTITY, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChanged(page)}
                hidden={page > pages}
              >
                {page}
              </button>
            </li>
          ))
        }
    <li>
      <button
      onClick={() => onPageChanged(pages)}
      hidden={current === pages}
      >
        ultima pagina
      </button>
    </li>
    </ul>
  )
}

export default Pagination;

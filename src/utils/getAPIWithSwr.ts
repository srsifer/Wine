import useSWR from "swr";
export interface UseFetchProps {
  priceStart?:  number ,
  priceEnd?: number ,
  ProductName?: string ,
  page?: string,
  type?: string,
}

const typeRequest = ({priceStart, priceEnd, ProductName, page, type}: UseFetchProps)=> {
  let url = ''
  switch (type) {
    case '':
      return url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`

    case 'priceFilter':
        return url = `https://wine-back-test.herokuapp.com/products?filter=${priceStart }-${priceEnd}&page=${page}&limit=9`

    case 'textFilter':
       return url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&name=${ProductName}`
    case 'AllApi':
      return url = `https://wine-back-test.herokuapp.com/products?page=${page}`
    default:
      return url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`
  }
}

export function useFetch<Data = any>(props: UseFetchProps) {
  const url = typeRequest(props)
  const {data, error} = useSWR<Data>(url, async url => {
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    return data
  })
  return {data, error}
}

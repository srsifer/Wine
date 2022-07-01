import useSWR from "swr";
export interface UseFetchProps {
  priceStart?:  number ,
  priceEnd?: number ,
  ProductName?: string ,
  page?: string ,
}
export function useFetch<Data = any>({priceStart, priceEnd, ProductName, page}: UseFetchProps) {
  const url = `
  https://wine-back-test.herokuapp.com/products?filter=${!priceStart ? 0 : priceStart }-${!priceEnd  ? 600 : priceEnd}&page=${!page ? 1 : page}&name=${!ProductName ? '': ProductName }&limit=9`
  const {data, error} = useSWR<Data>(url, async url => {
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    return data
  })
  return {data, error}
}

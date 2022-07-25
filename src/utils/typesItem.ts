export interface DataProps {
  items: [
    {
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
  ],
  itemsPerPage: number;
  page: number;
  totalItems: number;
  totalPages: number;
}


export interface ProductCardProps {
  item: {
    id: number;
    image: string;
    name: string;
    price: number;
    priceMember: number;
    priceNonMember: number;
    discount: number;
  }
}

export interface ItemOrder {
  id: number;
  name: string;
  image: string;
  priceMember: number;
  quantity: number;
}

export interface AboutProductProps {
  data: {
    [x: string]: any;
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
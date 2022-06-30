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

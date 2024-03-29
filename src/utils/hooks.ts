import { ItemOrder } from "./typesItem";

const veryfiStorageEmpty = (itemOrder: object, setGlobalState: any) => {
  setGlobalState([itemOrder])
    return localStorage.setItem('allProducts', JSON.stringify([itemOrder]))
}

const FindItemEqualStorage = (AllProducts: Array<{}>, itemOrder: any) => {
  AllProducts.forEach((localitem: typeof itemOrder) => {
    if (localitem.id === itemOrder.id) {
      localitem.priceMember = itemOrder.priceMember * localitem.quantity
      localitem.quantity +=  itemOrder.quantity
    }
  })
}

export const AddToCart = (createObjectOrder: ItemOrder, setGlobalState : Function) => {
  const itemOrder = createObjectOrder

  const AllProducts = JSON.parse(localStorage.getItem('allProducts') || '[]')

  if (AllProducts.length == 0) veryfiStorageEmpty(itemOrder, setGlobalState)

  const itemFound = AllProducts.find((item: typeof itemOrder) => item.id === itemOrder.id);

  if (itemFound) {
    FindItemEqualStorage(AllProducts, itemOrder)
  }

  if (itemFound == undefined) {
    AllProducts.push(itemOrder)
  }

  setGlobalState(AllProducts)
  localStorage.setItem('allProducts', JSON.stringify(AllProducts));
}
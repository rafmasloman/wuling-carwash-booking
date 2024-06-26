export interface IProductResponseParams {
  id: number;
  productName: string;
  price: number;
}

export interface IProductRequestParams {
  productName: "SERVICE" | "WASH" | string;
  price: number;
}

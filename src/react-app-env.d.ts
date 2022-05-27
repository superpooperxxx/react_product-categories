/// <reference types="react-scripts" />

export interface Order {
  id: number;
  userId: number;
  title: string;
}

export interface Product {
  id: number;
  orderId: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
}

export interface FullOrder extends Order {
  user?: User;
  products: Product[];
}

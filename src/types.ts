export interface User {
  id: number;
  name: string
}

export interface Category {
  id: number;
  title: string;
  ownerId: number;
}

export interface Product {
  id: number;
  name: string;
  categoryId: number;
}

export interface FullCategory extends Category {
  owner?: User;
  products: Product[];
}

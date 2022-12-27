export interface User {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  title: string;
  ownerId: number;
}

export interface Products {
  id: number;
  name: string;
  categoryId: number;
}

export interface PreparedCategory extends Category {
  user?: User;
  products: Products[];
}

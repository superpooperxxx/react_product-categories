import { User } from './User';
import { Product } from './Product';
import { Category } from './Category';

export type PreparedCategory = Category & {
  owner: User | null;
  products: Product[];
};

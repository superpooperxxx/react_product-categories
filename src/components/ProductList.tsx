import { FC } from 'react';
import { Product } from '../types/Product';

interface Props {
  products: Product[];
}
export const ProductList: FC<Props> = ({
  products,
}) => (
  <ul className="ui list">
    {products.map((product) => (
      <li key={product.id}>
        {product.name}
      </li>
    ))}
  </ul>
);

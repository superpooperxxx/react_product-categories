import { FC } from 'react';
import { Products } from '../../types/types';

interface Props {
  products: Products[];
}

export const ProductsList: FC<Props> = (props) => {
  const { products } = props;

  return (
    <>
      {products.length === 0
        ? (
          <b>No products</b>
        )
        : (
          <ul className="ui list">
            {products.map(product => (
              <li key={product.id}>
                {product.name}
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

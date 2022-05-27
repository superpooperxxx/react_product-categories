import React from 'react';
import { FullOrder } from '../../react-app-env';

interface Props {
  order: FullOrder
}

export const ProductsList: React.FC<Props> = ({ order }) => (
  <ul className="ui list">
    {order.products.map(product => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);

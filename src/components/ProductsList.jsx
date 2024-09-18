import React from 'react';

export const ProductsList = ({ products }) => (
  <ul className="ui list">
    {products.map(product => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);

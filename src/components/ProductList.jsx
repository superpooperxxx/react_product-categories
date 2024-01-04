import React from 'react';

export const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <b>No products</b>;
  }

  return (
    <ul className="ui list">
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

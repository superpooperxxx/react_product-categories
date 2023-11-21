import React from 'react';

export const Products = ({ products }) => {
  return (
    <>
      {products.length
        ? (
          <ul className="ui list">
            {products.map(product => (
              <li key={product.id}>
                {product.name}
              </li>
            ))}
          </ul>
        )
        : <b>No products</b>}
    </>
  );
};

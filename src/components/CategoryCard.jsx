import React from 'react';
import { ProductsList } from './ProductsList';

export const CategoryCard = ({ category }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>
          {category.title} - ({category.owner.name})
        </p>

        {!category.products.length ? (
          <b>No products</b>
        ) : (
          <ProductsList products={category.products} />
        )}
      </div>
    </div>
  </div>
);

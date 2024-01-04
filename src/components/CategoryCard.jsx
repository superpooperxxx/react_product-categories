import React from 'react';
import { ProductList } from './ProductList';

export const CategoryCard = ({ category }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{`${category.title} - (${category.owner.name})`}</p>
        <ProductList products={category.products} />
      </div>
    </div>
  </div>
);

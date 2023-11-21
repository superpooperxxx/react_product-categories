import React from 'react';
import { Products } from '../Products/Products';

export const Category = (props) => {
  const { category } = props;

  return (
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>{`${category.title}-(${category.owner.name})`}</p>

          <Products products={category.products} />
        </div>
      </div>
    </div>
  );
};

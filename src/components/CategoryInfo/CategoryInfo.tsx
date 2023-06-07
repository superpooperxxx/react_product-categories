import { FC } from 'react';
import { FullCategory } from '../../types';
import { ProductsList } from '../ProductsList/ProductsList';

interface Props {
  category: FullCategory;
}

export const CategoryInfo: FC<Props> = ({ category }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{`${category.title} - (${category.owner?.name || 'Jonny Placeholder'})`}</p>

        {category.products.length === 0
          ? <b>No products</b>
          : (
            <ProductsList products={category.products} />
          )}
      </div>
    </div>
  </div>
);

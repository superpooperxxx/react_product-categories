import React, { FC } from 'react';
import { PreparedCategory } from '../../types/types';
import { ProductsList } from '../ProductsList/ProductsList';
import { CategoryTitle } from '../CategoryTitle/CategoryTitle';

interface Props {
  categories: PreparedCategory[];
}

export const CategoryList: FC<Props> = React.memo((props) => {
  const { categories } = props;

  return (
    <>
      {categories.map(category => (
        <div className="ui card" key={category.id}>
          <div className="ui content">
            <div className="ui description">
              <CategoryTitle
                categoryName={category.title}
                userName={category.user?.name}
              />

              <ProductsList products={category.products} />

            </div>
          </div>
        </div>
      ))}
    </>
  );
});

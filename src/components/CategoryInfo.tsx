import { FC } from 'react';
import { PreparedCategory } from '../types/PreparedCategory';
import { ProductList } from './ProductList';

interface Props {
  category: PreparedCategory;
}
export const CategoryInfo: FC<Props> = ({
  category,
}) => {
  const {
    title,
    owner,
    products,
  } = category;

  return (
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>
            {`${title} - (${owner?.name || 'Unknown user'})`}
          </p>

          {products.length > 0
            ? (<ProductList products={products} />)
            : (<b>No products</b>)}
        </div>
      </div>
    </div>
  );
};

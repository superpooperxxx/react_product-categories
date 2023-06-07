import { FC } from 'react';
import { FullCategory } from '../../types';
import { CategoryInfo } from '../CategoryInfo/CategoryInfo';

interface Props {
  categories: FullCategory[];
}

export const CategoriesList: FC<Props> = ({ categories }) => (
  <>
    {categories.map(category => (
      <CategoryInfo key={category.id} category={category} />
    ))}
  </>
);

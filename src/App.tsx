import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { PreparedCategory } from './types/types';
import { CategoryList } from './components/CategoryList/CategoryList';

const preparedCategories: PreparedCategory[] = categoriesFromServer
  .map(category => {
    const user = usersFromServer.find(u => u.id === category.ownerId);
    const products = productsFromServer.filter(
      (p) => category.id === p.categoryId,
    );

    return {
      ...category,
      user,
      products,
    };
  });

export const App: React.FC = () => {
  return (
    <div className="container">
      <CategoryList categories={preparedCategories} />
    </div>
  );
};

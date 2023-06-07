import React from 'react';
import './App.scss';
import { categoriesFromServer } from './api/categories';
import { usersFromServer } from './api/users';
import { productsFromServer } from './api/products';
import { CategoriesList } from './components/CategoriesList/CategoriesList';
import { prepareCategories } from './helpers';

const categories = prepareCategories({
  users: usersFromServer,
  categories: categoriesFromServer,
  products: productsFromServer,
});

export const App: React.FC = () => (
  <div className="container">
    <CategoriesList categories={categories} />
  </div>
);

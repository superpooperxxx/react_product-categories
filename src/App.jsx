import React from 'react';
import './App.scss';
import { categoriesFromServer } from './api/categories';
import { usersFromServer } from './api/users';
import { productsFromServer } from './api/products';
import { Category } from './components/Category/Category.jsx';

const preparedCategories = categoriesFromServer.map(category => {
  const owner = usersFromServer.find(user => user.id === category.ownerId);
  const products = productsFromServer.filter(product => product.categoryId === category.id);

  return {
    ...category,
    owner,
    products,
  };
});

export const App = () => (
  <div className="container">
    {preparedCategories.map(category => (
      <Category key={category.id} category={category} />
    ))}
  </div>
);

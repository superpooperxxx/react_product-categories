import React from 'react';
import { CategoryCard } from './components/CategoryCard';
import './App.scss';
import { getPreparedCategories } from './api';

export const App = () => {
  const categories = getPreparedCategories();

  return (
    <div className="container">
      {categories.map(category => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
};

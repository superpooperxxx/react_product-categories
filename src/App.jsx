import React from 'react';
import './App.scss';
import { getPreparedCategories } from './utils';

import { CategoryCard } from './components/CategoryCard';

const categories = getPreparedCategories();

export const App = () => (
  <div className="container">
    {categories.map(category => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </div>
);

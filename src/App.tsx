import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';

interface Category {
  id: number,
  title: string,
  ownerId: number,
}

interface Product {
  id: number,
  name: string,
  categoryId: number,
}

interface User {
  id: number,
  name: string,
}

interface FullCategory extends Category {
  owner?: User,
  products: Product[],
}

function getUserById(users: User[], userId: number) {
  return users.find((user) => user.id === userId);
}

function prepareCategories(
  categories: Category[],
  productsWithoutCategory: Product[],
  users: User[],
): FullCategory[] {
  return categories.map((category) => ({
    ...category,
    owner: getUserById(users, category.ownerId),
    products: productsWithoutCategory.filter((product) => (
      product.categoryId === category.id
    )),
  }));
}

const preparedCategories = prepareCategories(
  categoriesFromServer,
  productsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <div className="container">
    {preparedCategories.map((category) => (
      <div className="ui card" key={category.id}>
        <div className="ui content">
          <div className="ui description">
            <p>{`${category.title} - (${category.owner?.name})`}</p>

            {category.products.length === 0 ? (
              <b>No products</b>
            ) : (
              <ul className="ui list">
                {category.products.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

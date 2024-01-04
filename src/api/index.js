import categoriesFromServer from './categories';
import usersFromServer from './users';
import productsFromServer from './products';

export function getUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export function getProducts(categoryId) {
  return productsFromServer.filter(
    product => product.categoryId === categoryId,
  );
}

export function getPreparedCategories() {
  return categoriesFromServer.map(category => ({
    ...category,
    owner: getUser(category.ownerId),
    products: getProducts(category.id),
  }));
}

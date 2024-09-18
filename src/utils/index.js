import users from '../api/users';
import products from '../api/products';
import categories from '../api/categories';

const getPerson = userId => users.find(user => user.id === userId);

const getProducts = categoryId =>
  products.filter(product => product.categoryId === categoryId);

export const getPreparedCategories = () =>
  categories.map(category => {
    return {
      ...category,
      owner: getPerson(category.ownerId),
      products: getProducts(category.id),
    };
  });

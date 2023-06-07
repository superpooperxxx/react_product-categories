import {
  Category, FullCategory, Product, User,
} from './types';

interface PrepareCategoryArgs {
  users: User[];
  categories: Category[];
  products: Product[];
}

export const prepareCategories = (
  args: PrepareCategoryArgs,
): FullCategory[] => {
  const { users, products, categories } = args;

  return categories.map(category => {
    const owner = users.find(user => user.id === category.ownerId);
    const categoryProducts = products.filter(product => (
      product.categoryId === category.id
    ));

    return {
      ...category,
      owner,
      products: categoryProducts,
    };
  });
};

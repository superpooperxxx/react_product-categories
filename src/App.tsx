import './App.scss';

import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';
import {
  FullOrder, Order, Product, User,
} from './react-app-env';
import { OrdersList } from './components/OrdersList';

const App = () => {
  const prepareOrder = (
    orders: Order[],
    users: User[],
    products: Product[],
  ): FullOrder[] => {
    return orders.map(order => ({
      ...order,
      user: users.find(user => user.id === order.userId),
      products: products.filter(product => product.orderId === order.id),
    }));
  };

  const orders = prepareOrder(
    ordersFromServer,
    usersFromServer,
    productsFromServer,
  );

  return (
    <div className="container">
      <OrdersList orders={orders} />
    </div>
  );
};

export default App;

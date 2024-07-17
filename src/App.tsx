import './App.scss';

// import usersFromServer from './api/users';
// import productsFromServer from './api/products';
// import categoriesFromServer from './api/categories';

export const App = () => (
  <div className="container">
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>Grocery - (Anna)</p>

          <ul className="ui list">
            <li>Bread</li>
            <li>Eggs</li>
            <li>Sugar</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>Electronics - (Roma)</p>
          <b>No products</b>
        </div>
      </div>
    </div>
  </div>
);

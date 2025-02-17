import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
// import Web Components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
window.app = {};
app.store = Store;
app.Router = Router;

// its better to wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.Router.init();
});

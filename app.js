import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

window.app = {};
app.store = Store;
app.Router = Router;

// its better to wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.Router.init();
});

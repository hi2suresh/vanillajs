import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';

window.app = {};
app.store = Store;

// its better to wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  loadData();
});

import API from './API.js';

export async function loadData() {
  const data = await API.fetchMenu();
  app.store.menu = data;
}

export async function getProductById(id) {
  if (app.store.menu === null) {
    await loadData();
  }

  for (category of app.store.menu) {
    for (product of category) {
      if (product.id === id) return product;
    }
  }
  return null;
}

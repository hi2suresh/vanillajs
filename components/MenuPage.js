export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    const styles = document.createElement('style');
    this.root.appendChild(styles);

    async function loadCSS() {
      const response = await fetch('./components/MenuPage.css');
      const css = await response.text();
      styles.textContent = css;
    }

    loadCSS();
  }

  // when the component is attached to DOM
  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    window.addEventListener('appmenuchange', () => {
      this.render();
    });
  }

  render() {
    const menuSection = this.root.querySelector('#menu');
    console.log(menuSection);
    if (app.store.menu) {
      for (const category of app.store.menu) {
        const liCategory = document.createElement('li');
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class='category'>
          </ul>
          `;
        menuSection.appendChild(liCategory);
        const ulCategory = liCategory.querySelector('ul');
        console.log(ulCategory);
        category.products.map((product) => {
          const item = document.createElement('product-item');
          item.dataset.product = JSON.stringify(product);
          ulCategory.appendChild(item);
        });
      }
    } else {
      menuSection.innerHTML = 'Loading....';
    }
  }
}

customElements.define('menu-page', MenuPage);

const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
    });
    // Event handler for URL changes
    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });
    // Go to the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Route is ${route}`);
    if (addToHistory) {
      history.pushState({ route }, null, route);
      let pageElement = null;
      switch (route) {
        case '/':
          pageElement = document.createElement('menu-page');
          break;
        case '/order':
          pageElement = document.createElement('order-page');
          break;
        default:
          if (route.startsWith('/product-')) {
            pageElement = document.createElement('h1');
            pageElement.textContent = 'Details';
            const paramId = route.substring(route.indexOf('-') + 1);
            pageElement.dataset.id = paramId;
          }
      }
      if (pageElement) {
        const cache = document.querySelector('main');
        cache.innerHTML = '';
        cache.appendChild(pageElement);
      }
    }
  },
};

export default Router;

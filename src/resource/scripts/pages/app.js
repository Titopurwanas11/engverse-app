import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import { getAccessToken } from '../models/auth-model';
import Header from '../components/header';
import IconSvg from '../components/icons';

class App {
  #content = null;
  #header = null;

  constructor({ content, header }) {
    this.#content = content;
    this.#header = header;
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];

    const token = getAccessToken();
    const protectedRoutes = [
      '/dashboard',
      '/practice',
      '/reading',
      '/listening',
      '/structure',
      '/result',
    ];

    if (protectedRoutes.includes(url) && !token) {
      location.hash = '#/login';
      return;
    }

    const pagesWithHeader = ['/dashboard', '/practice'];
    const headerElement = document.querySelector('header-app');

    if (headerElement) {
      if (pagesWithHeader.includes(url)) {
        headerElement.style.display = 'block';
      } else {
        headerElement.style.display = 'none';
      }
    }

    const publicRoutes = ['/login', '/register'];
    if (publicRoutes.includes(url) && token) {
      location.hash = '#/dashboard';
      return;
    }

    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;

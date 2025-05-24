import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import PracticePage from '../pages/practice/practice-page';

const routes = {
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
  
  '/dashboard': new DashboardPage(),
  '/practice': new PracticePage(),
};

export default routes;

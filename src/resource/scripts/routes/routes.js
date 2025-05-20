import DashboardPage from '../pages/dashboard/dashboard-page';
import PracticePage from '../pages/practice/practice-page';

const routes = {
  '/': new DashboardPage(),
  '/practice': new PracticePage(),
};

export default routes;

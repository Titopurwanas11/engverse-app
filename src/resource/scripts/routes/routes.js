import LoginPage from '../pages/auth/login-page';
import RegisterPage from '../pages/auth/register-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import PracticePage from '../pages/practice/practice-page';
import ResultPage from '../pages/result/result-page';
import ReadingPage from '../pages/quiz/reading-page';
import ListeningPage from '../pages/quiz/listening-page';
import StructurePage from '../pages/quiz/structure-page';

const routes = {
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
  
  '/dashboard': new DashboardPage(),
  '/practice': new PracticePage(),
  '/reading': new ReadingPage(),
  '/listening': new ListeningPage(),
  '/structure': new StructurePage(),
  '/result': new ResultPage(),
};

export default routes;

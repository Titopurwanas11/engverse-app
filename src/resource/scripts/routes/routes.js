import LoginPage from '../pages/auth/login/login-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import PracticePage from '../pages/practice/practice-page';
import QuizPage from '../pages/quiz-page/quiz-page';

const routes = {
  '/login': new LoginPage(),
  
  '/dashboard': new DashboardPage(),
  '/practice': new PracticePage(),
  '/quiz': new QuizPage(),
};

export default routes;

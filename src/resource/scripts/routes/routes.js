import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import PracticePage from '../pages/practice/practice-page';
import QuizPage from '../pages/quiz-page/quiz-page';
import ResultPage from '../pages/result/result-page';

const routes = {
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
  
  '/dashboard': new DashboardPage(),
  '/practice': new PracticePage(),
  '/quiz': new QuizPage(),
  '/result': new ResultPage(),
};

export default routes;

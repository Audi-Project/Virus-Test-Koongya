import Start from './pages/Start';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import Root from './pages/Root';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/resultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Start /> },
      {
        path: 'main',
        element: <QuestionPage />,
      },
      { path: 'result/:mbti', element: <ResultPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

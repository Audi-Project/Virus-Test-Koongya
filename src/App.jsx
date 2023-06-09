import Start from './pages/Start';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Start />,
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

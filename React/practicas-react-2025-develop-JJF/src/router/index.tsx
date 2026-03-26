import Home from '@/components/pages/Home';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ],
  },
]);

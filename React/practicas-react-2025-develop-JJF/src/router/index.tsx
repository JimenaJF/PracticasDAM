import AlertsMessagingPage from '@/components/pages/AlertsMessagingPage';
import CircleOfCarePage from '@/components/pages/CircleOfCarePage';
import DailyCareOgramPage from '@/components/pages/DailyCareOgramPage';
import Home from '@/components/pages/Home';
import PointsPage from '@/components/pages/PointsPage';
import RemindersCalendarPage from '@/components/pages/RemindersCalendarPage';
import ReportsPage from '@/components/pages/ReportsPage';
import RepositoryPage from '@/components/pages/RepositoryPage';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { createBrowserRouter } from 'react-router';


export const router = createBrowserRouter([
  
 {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/alerts-messaging', element: <AlertsMessagingPage/> },
      { path: '/reminders-calendar', element: <RemindersCalendarPage /> },
      { path: '/circle-of-care', element: <CircleOfCarePage /> },
      { path: '/reports', element: <ReportsPage /> },
      { path: '/repository', element: <RepositoryPage /> },
      { path: '/my-points', element: <PointsPage /> },
      { path: '/daily-care-o-gram', element: <DailyCareOgramPage /> }
    ],
  },

]);

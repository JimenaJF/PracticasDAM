import Header from '@/components/organisms/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div>
      <Header
                    valueNotification={6}
                    clientName="Yago Lopez García"
                    textValueSettings="SETTINGS"
                    textLogoutButton="LOGOUT"
              />
      <Outlet />
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import AlertsMessaging from '../organisms/AlertsMessaging';
import CardsGrid from '../organisms/CardsGrid';
import Header from '../organisms/Header';
//import 'styles/Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header
        valueNotification={6}
        clientName="Cordelia Carpenter"
        textValueSettings="SETTINGS"
        textLogoutButton="LOGOUT"
      />

      <CardsGrid />
      <section>
        <AlertsMessaging text="ALERTS AND MESSAGING" />
      </section>
    </>
  );
}

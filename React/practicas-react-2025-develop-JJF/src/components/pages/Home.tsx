import { useTranslation } from 'react-i18next';
import CardItem from '../molecules/CardItem';
import UserSummary from '../molecules/UserSummary';
//import 'styles/Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <UserSummary/>
      <CardItem/>
    </>
  );
}

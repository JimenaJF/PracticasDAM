import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enTranslation from '@/locales/en/translation.json';
import esTranslation from '@/locales/es/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    fallbackLng: 'en',
    preload: ['en'],
    detection: { order: ['navigator'] },
    returnObjects: true,
    react: {
      useSuspense: false,
    },
  })
  .then(() => {
    console.log('this will succeed');
  })
  .catch((e) => {
    console.log(e);
  });

export default i18n;

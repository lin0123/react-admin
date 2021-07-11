import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  ZH_CH, EN_US, ZH_HK, LOCAL_LANG,
} from '@/constant';
import zhCH from '@/lang/zh_CN';
import enUS from '@/lang/en_US';
import zhHK from '@/lang/zh_HK';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      [ZH_CH]: zhCH,
      [EN_US]: enUS,
      [ZH_HK]: zhHK,
    },
    lng: LOCAL_LANG,
    interpolation: {
      /** react already safes from xss */
      escapeValue: false,
    },
  });

export default i18n;

import React, { useState, useEffect, useReducer } from 'react';
import classNames from 'classnames';
import Routes from '@/router/routes';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import zhHK from 'antd/lib/locale/zh_HK';
import {
  ZH_CH, EN_US, ZH_HK, LangKeyT, LOCAL_LANG, LOCAL_LANG_STR,
} from '@/constant';
import { AliveScope } from 'react-activation';
import { context } from '@/context';
import reducer from '@/context/reducer';
import data from '@/context/contextData';
import '@/assets/style/bass.less';
import i18n from '@/i18n';
import './index.less';

// const AdminLayout = React.lazy(() => import(
//   /* webpackChunkName: 'admin-layout-index' */ '@/layout/admin-layout/Index'
// ));

/** 配置antd的语言, 简体, 繁体, 英文三种类型 */
const antdLangObj = {
  [ZH_CH]: zhCN,
  [EN_US]: enUS,
  [ZH_HK]: zhHK,
};

interface AppTypes {
  className?: string;
}

const App: React.FC<AppTypes> = (props) => {
  const { className } = props;
  const store = useReducer(reducer, data);
  const [currentLocal, setCurrentLocal] = useState(LOCAL_LANG);

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      localStorage.setItem(LOCAL_LANG_STR, lng);
      setCurrentLocal(lng as LangKeyT);
    });
  }, []);

  return (
    <ConfigProvider locale={antdLangObj[currentLocal]}>
      <context.Provider value={store}>
        <AliveScope>
          <div className={classNames('page-main-container', className)}>
            <Routes />
          </div>
        </AliveScope>
      </context.Provider>
    </ConfigProvider>
  );
};

export default App;

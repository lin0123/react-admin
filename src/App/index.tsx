import React, { useReducer } from 'react';
import classNames from 'classnames';
import Routes from '@/router/routes';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
import { context } from '@/context';
import reducer from '@/context/reducer';
import data from '@/context/contextData';
import '@/assets/style/bass.less';
import './index.less';

// const AdminLayout = React.lazy(() => import(
//   /* webpackChunkName: 'admin-layout-index' */ '@/layout/admin-layout/Index'
// ));

// const TestPage = React.lazy(() => import(
//   /* webpackChunkName: 'page-test' */ '@/pages/tests'
// ));

interface AppTypes {
  className?: string;
}

const App: React.FC<AppTypes> = (props) => {
  const { className } = props;
  const store = useReducer(reducer, data);

  return (
    <ConfigProvider locale={locale}>
      <context.Provider value={store}>
        <div className={classNames('page-main-container', className)}>
          <Routes />
        </div>
      </context.Provider>
    </ConfigProvider>
  );
};

export default App;

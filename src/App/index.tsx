import React from 'react';
import classNames from 'classnames';
import Routes from '@/router/routes';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
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
  return (
    <ConfigProvider locale={locale}>
      <div className={classNames('page-main-container', className)}>
        <Routes />
      </div>
    </ConfigProvider>
  );
};

export default App;

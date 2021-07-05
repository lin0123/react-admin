import Auth from '@/components/Auth';
import Loading from '@/components/Loading';
import React, { useMemo } from 'react';
import {
  Route, Switch, Redirect, RouteProps, RouteComponentProps,
} from 'react-router-dom';

import routesConfig from '@/router/config';
import { RouteChildren } from '@/router/interface';

const fallback = <Loading />;

const Routes: React.FC = () => {
  const routes = useMemo(() => {
    const routeChildren = (item: RouteChildren[], parentPath = '') => (
      item.map((route) => {
        let tpPath = route.path;
        if (tpPath.indexOf('/') !== 0) tpPath = `${parentPath}/${route.path}`;
        const props: RouteProps = {
          path: tpPath,
          render: () => <></>,
        };

        if (route.children) {
          const Layout = route.layout ? React.lazy(route.layout) : React.Fragment;
          const curRoutes = routeChildren(route.children, tpPath);

          props.exact = false;
          props.render = (layoutProps: unknown) => (
            <Auth login={!!route.login} access={route.access}>
              <React.Suspense fallback={fallback}>
                <Layout {...layoutProps}>
                  <Switch>
                    {curRoutes}
                  </Switch>
                </Layout>
              </React.Suspense>
            </Auth>
          );
        } else if (route.redirect) {
          props.exact = true;
          props.render = () => <Redirect to={route.redirect || ''} />;
        } else if (route.component) {
          const Component = React.lazy(route.component);
          props.render = (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            routeProps: RouteComponentProps<any>,
          ) => (
            <Auth login={!!route.login} access={route.access}>
              <React.Suspense fallback={fallback}>
                {React.createElement(
                  Component,
                  { ...routeProps as React.ClassAttributes<HTMLInputElement> },
                )}
              </React.Suspense>
            </Auth>
          );
          props.exact = true;
        } else {
          console.error(`${route.path} 未设置渲染组件`);
        }
        return <Route key={route.path} {...props} />;
      })
    );

    return routeChildren(routesConfig);
  }, []);

  return (
    <Switch>
      {routes}
    </Switch>
  );
};

export default Routes;

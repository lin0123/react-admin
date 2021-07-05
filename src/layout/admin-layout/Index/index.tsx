import React from 'react';
import TopHeader from '@/layout/admin-layout/TopHeader';
import classNames from 'classnames';
import LeftMenu from '../LeftMenu';
import './index.less';

interface AdminLayoutIndexTypes {
  className?: string;
}

const AdminLayoutIndex: React.FC<AdminLayoutIndexTypes> = (props) => {
  const {
    className = '',
    children,
  } = props;

  return (
    <div className={classNames('admin-layout-container', className)}>
      <TopHeader className="layout-header"></TopHeader>
      <div className="layout-page-section">
        <LeftMenu className="layout-left-menu"></LeftMenu>
        <div className="layout-page-container">
          <div className="layout-page-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayoutIndex;

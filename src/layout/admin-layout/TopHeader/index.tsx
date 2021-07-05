import React from 'react';
import classNames from 'classnames';
import './index.less';

interface TopHeaderTypes {
  className?: string;
}

const TopHeader: React.FC<TopHeaderTypes> = (props) => {
  const {
    className = '',
  } = props;

  return (
    <div className={classNames('admin-layout-top-head', className)}>
      头部菜单
    </div>
  );
};

export default TopHeader;

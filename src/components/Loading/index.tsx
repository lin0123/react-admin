import React from 'react';

interface LoadingTypes {
  className?: string;
}

const Loading: React.FC<LoadingTypes> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      加载中...
    </div>
  );
};

Loading.defaultProps = {
  className: '',
};

export default Loading;

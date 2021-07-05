import React from 'react';

interface TestRcTypes {
  className?: string;
}

const TestRc: React.FC<TestRcTypes> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      登录页面
    </div>
  );
};

TestRc.defaultProps = {
  className: '',
};

export default TestRc;

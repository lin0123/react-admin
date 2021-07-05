import React from 'react';
import './index.less';

const CssStyle = () => (
  <div className="test-css">
    {/* <div className="column-left">
      <div className="resize-bar"></div>
      <div className="resize-line"></div>
      <div className="resize-save">
        左侧的内容，左侧的内容，左侧的内容，左侧的内容
      </div>
    </div>
    <div className="column-right">
      右侧的内容，右侧的内容，右侧的内容，右侧的内容
    </div> */}
    <div className="scroll-css">
      <div className="scroll-css-bar"></div>
      <div className="scroll-content">
        展示的内容
      </div>
    </div>
  </div>
);

export default CssStyle;

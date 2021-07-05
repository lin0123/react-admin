/**
 * 路由类型接口定义
 */
import React from 'react';

export interface RouteChildren {
  path: string;
  login?: boolean;
  access?: string|string[];
  component?: () => Promise<{default: React.ComponentType;}>;
  children?: RouteChildren[];
  layout?: () => Promise<{default: React.ComponentType;}>;
  redirect?: string;
}

import { StoreDataI, ActionData } from './interface';

export default function reducer(
  state: StoreDataI,
  action: ActionData,
) {
  switch (action.type) {
    case 'menuChange':
      return {
        ...state,
        ...action,
      };
    case 'menuFold':
      return {
        ...state,
        isMenuFold: action.isMenuFold,
        leftMenuW: action.leftMenuW,
      };
    case 'resize':
      return {
        ...state,
        winH: window.innerHeight,
        winW: window.innerWidth,
      };
    default:
      throw new Error('没有提交修改的类型...');
  }
}

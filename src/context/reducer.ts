import { StoreDataI, ActionData } from './interface';

export default function reducer(
  state: StoreDataI,
  action: ActionData,
) {
  switch (action.type) {
    case 'test':
      return {
        ...state,
        ...action,
      };
    default:
      throw new Error('请确定提交数据是否定义');
  }
}

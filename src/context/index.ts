import React, {
  useContext as useReactContext,
} from 'react';

import { createContext } from 'react-activation';

import { StoreDataI, ActionData } from './interface';

type CreateContextT = [StoreDataI, React.Dispatch<ActionData>];

const context = createContext<CreateContextT | []>([]);

const useStore = () => useReactContext(context) as CreateContextT;

export {
  context,
  useStore,
};

import { createHashHistory } from 'history';

const history = createHashHistory();
// const history = createBrowserHistory();

history.listen((location) => {
  // console.log(location);
});

export default history;

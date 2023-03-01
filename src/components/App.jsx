import { GlobalStyle } from 'GlobalStyles';

import { Menu } from './Menu/Menu';
import { UserRoutes } from 'UserRoutes';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <UserRoutes />
    </>
  );
};

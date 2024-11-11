import { Suspense } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';

import RenderRouter from './render-router';

const Routes = () => {

  return (
    <Suspense fallback="loading...">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;

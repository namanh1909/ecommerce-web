import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import RenderRouter from './render-router';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Spinner from '@/components/ui/spinner';

const Routes = () => {
  return (
    <Suspense fallback={<Spinner loading={true} />}>
      <BrowserRouter>
        <Theme>
          <RenderRouter />
        </Theme>
      </BrowserRouter>
    </Suspense>
  )
};

export default Routes;

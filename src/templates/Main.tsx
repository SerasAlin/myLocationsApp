import { ReactNode } from 'react';

import ResponsiveAppBar from '../components/appBar/responsiveAppBar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700">
    {props.meta}

    <ResponsiveAppBar />
    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </div>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>
    </div>
  </div>
);

export { Main };

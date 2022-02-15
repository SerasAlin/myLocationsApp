import { ReactNode } from 'react';

import { useRouter } from 'next/router';

import ResponsiveAppBar from '../components/appBar/responsiveAppBar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  children: ReactNode;
};

export const Main = (props: IMainProps) => {
  const router = useRouter();
  const getSelectedPage = () => {
    if (router.pathname.includes('/locations')) {
      return AppConfig.locations;
    }
    return AppConfig.categories;
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="px-1 w-full antialiased text-gray-700">
        <div className="mx-auto max-w-screen-md">
          <div className="border-b border-gray-300">
            <div className="pt-16 pb-8">
              <div className="text-3xl font-bold text-gray-900">
                {getSelectedPage()}
              </div>
            </div>
          </div>

          <div className="py-5 text-xl content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

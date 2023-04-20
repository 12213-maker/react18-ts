import React, { memo, Suspense } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet, Link } from 'react-router-dom';
import DiscoverNav from './c-components/discoverNav'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <DiscoverNav></DiscoverNav>

      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
}

export default memo(Discover);


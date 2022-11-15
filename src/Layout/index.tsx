import { NavBar } from '@app/components/NavBar';
import { ReactNode } from 'react';

export const Layout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

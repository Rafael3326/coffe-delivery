import { NavBar } from '@app/components/NavBar';
import { ReactNode } from 'react';
import { LayoutContainer } from './styles';

export const Layout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

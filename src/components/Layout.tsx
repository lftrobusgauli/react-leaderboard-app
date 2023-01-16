import React, { ReactNode } from 'react';
import { Header } from '../components';

interface IProps {
  children: ReactNode;
}

export const Layout = (props: IProps) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

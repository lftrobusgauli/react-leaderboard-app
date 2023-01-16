import React, { ReactElement, ReactNode } from 'react';
import { Header } from '../components';

interface IProps {
  children: ReactNode;
}

export const Layout = (props: IProps): ReactElement => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

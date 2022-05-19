import { Fragment, FC, ReactNode } from 'react';
import { Header } from './header';

interface IComp {
  children: ReactNode
}

export const Layout: FC<IComp> = ({children}) => {
  return (
    <Fragment>
      <Header />
      <main style={{padding: '0 2rem'}} >
        {children}
      </main>
    </Fragment>
  )
};
import React, { type PropsWithChildren, type ReactNode } from 'react';

const Layout = ({ children }: PropsWithChildren): ReactNode => <main>{children}</main>;

export default Layout;

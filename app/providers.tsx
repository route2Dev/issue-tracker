'use client';

import AuthProvider from '@/app/components/auth/AuthProvider';
import usePrefersDarkMode from '@/app/components/prefers-dark-mode.hook';
import { Theme } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  const prefersDarkMode = usePrefersDarkMode();

  console.log('prefersDarkMode', prefersDarkMode);

  return (
    <Theme appearance={prefersDarkMode ? 'dark' : 'light'}>
      <AuthProvider>{children}</AuthProvider>
    </Theme>
  );
}

export default Providers;

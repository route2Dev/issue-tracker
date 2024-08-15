import { Text } from '@radix-ui/themes';
import React, { PropsWithChildren } from 'react';

function ErrorMessage({ children }: Readonly<PropsWithChildren>) {
  if (!children) {
    return null;
  }

  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}

export default ErrorMessage;

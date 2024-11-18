import { Box, Skeleton } from '@radix-ui/themes';
import React from 'react';

function IssueFormSkeleton() {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" mb="1rem" />
      <Skeleton height="20rem" />
    </Box>
  );
}

export default IssueFormSkeleton;

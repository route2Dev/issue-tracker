import { Flex, Card, Box, Skeleton } from '@radix-ui/themes';
import React from 'react';

function LoadingIssueDetailPage() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose dark:prose-invert" mt="4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Card>
    </Box>
  );
}

export default LoadingIssueDetailPage;

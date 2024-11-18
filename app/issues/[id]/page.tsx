import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import React from 'react';
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import IssueDetails from '@/app/issues/[id]/IssueDetails';
import DeleteIssueButton from '@/app/issues/[id]/DeleteIssueButton';

interface Props {
  params: { id: string };
}

async function IssueDetailsPage({ params: { id } }: Readonly<Props>) {
  if (isNaN(parseInt(id))) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    notFound();
  }

  await delay(2000);

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
}

export default IssueDetailsPage;

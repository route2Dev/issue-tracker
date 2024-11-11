import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import React from 'react';
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import IssueDetails from '@/app/issues/[id]/IssueDetails';

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
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
}

export default IssueDetailsPage;

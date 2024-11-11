import IssueForm from '@/app/issues/_components/IssueForm';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: string };
}

async function EditIssuePage({ params: { id } }: Props) {
  if (isNaN(parseInt(id))) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    notFound();
  }

  return <IssueForm issue={issue} />;
}

export default EditIssuePage;

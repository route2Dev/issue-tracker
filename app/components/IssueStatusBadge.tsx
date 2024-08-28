import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React from 'react';

const statuMap: Record<
  Status,
  { label: string; color: 'red' | 'violet' | 'green' }
> = {
  OPEN: { label: 'Open', color: 'red' },
  IN_PROGRESS: { label: 'In Progress', color: 'violet' },
  CLOSED: { label: 'Closed', color: 'green' },
};

interface Props {
  status: Status;
}

function IssueStatusBadge({ status }: Props) {
  return <Badge color={statuMap[status].color}>{statuMap[status].label}</Badge>;
}

export default IssueStatusBadge;

import IssueFormSkeleton from '@/app/issues/_components/IssueFormSkeleton';
import dynamic from 'next/dynamic';

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

function NewIssuePage() {
  return <IssueForm />;
}

export default NewIssuePage;

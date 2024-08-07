'use client';

import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { Controller, useForm } from 'react-hook-form';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  const onSubmit = async (data: IssueForm) => {
    await axios.post('/api/issues', data);
    router.push('/issues');
  };

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root placeholder="Title" {...register('title')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
}

export default NewIssuePage;

'use client';

import { Button, Callout, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
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
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (data: IssueForm) => {
    try {
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      setError('An unexpected error has ocurred.');
    }
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
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
    </div>
  );
}

export default NewIssuePage;

import React, { useRef, useState } from 'react';

import LoadingSpinner from '@/components/LoadingSpinner';

import { Form, FormState } from '@/types/SubscribeForm';

export default function SubscribeBox() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement>(null);

  // TODO: get number of subscribers from API
  // const { data } = useSWR<Subscribers>('/api/subscribers');
  // const subscriberCount = new Number(data?.count);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscribe = async (e: any) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    if (inputEl && inputEl.current) {
      const res = await fetch(`/api/subscribe`, {
        method: 'POST',
        body: JSON.stringify({ email: inputEl.current.value }),
      });

      const { error } = await res.json();
      if (error) {
        setForm({
          state: Form.Error,
          message: error,
        });
        return;
      }

      inputEl.current.value = '';
      setForm({
        state: Form.Success,
        message: `Hooray! You're now on the list.`,
      });
    } else {
      setForm({
        state: Form.Error,
        message: `Failed to add your email. Please try again later`,
      });
    }
  };

  return (
    <div className='mt-16 w-full rounded border border-primary-200 bg-primary-50 p-6 dark:border-gray-700 dark:bg-primary-600 dark:bg-opacity-10'>
      <h3 className=''>Subscribe to the newsletter</h3>
      <p className='my-1 text-gray-800 dark:text-gray-200'>
        Get monthly emails from me about tech, finance and more.
      </p>
      <form className='relative my-4' onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label='Email for newsletter'
          placeholder='you@email.com'
          type='email'
          autoComplete='email'
          required
          className='mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-32 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-100'
        />
        <button
          className='absolute right-1 top-1 my-0 flex h-[34px] w-28 items-center justify-center rounded bg-gray-100 px-4 py-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100'
          type='submit'
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <p className='flex items-center text-sm font-bold text-red-800 dark:text-red-400'>
          {form.message}
        </p>
      ) : form.state === Form.Success ? (
        <p className='flex items-center text-sm font-bold text-green-700 dark:text-green-400'>
          {form.message}
        </p>
      ) : (
        <>
          <p className='text-sm opacity-80'>Totally free, no ads, no spam.</p>
          {/* TODO: remove that ^ show number of subscribers */}
        </>
      )}
    </div>
  );
}

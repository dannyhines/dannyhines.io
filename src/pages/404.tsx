import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white dark:bg-dark'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black dark:text-white'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <p className='my-8'>
              Hi, I am an Albanian virus but because of poor technology in my
              country unfortunately I am not able to harm your computer. Please
              be so kind to delete one of your important files yourself and then
              forward me other users. Many thanks for your cooperation! Best
              regards, Albanian virus
            </p>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}

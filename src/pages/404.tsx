import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
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
              *Slow clap* Well well well... Here we are. The 404 error page.
              You&apos;re a curious one huh? Messing with the url, sneakin&apos;
              around on my website lookin for a hidden page. I would never
              create a easter egg like that
              <UnstyledLink href='harambe'>.</UnstyledLink> Or did I create a
              link to a page that doesn&apos;t exist? If it&apos;s the latter,
              my bad I didn&apos;t mean to get all accusatory.
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

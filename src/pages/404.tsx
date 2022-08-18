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
              *Slow clap* Well well well... Here we are. The 404 page. You think you&apos;re
              pretty slick, huh? Sneakin&apos; around on my website, messing with the url..
              were you looking for a hidden page or something? I&apos;d never waste my time
              creating an easter egg like that
              <UnstyledLink href='/harambe'>.</UnstyledLink> Or.. did I mess up and create a
              link to a page that doesn&apos;t exist? Huh, maybe it was my fault. If
              that&apos;s the case then that&apos;s my bad sorry about that.
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

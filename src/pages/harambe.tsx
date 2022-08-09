import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='items-left flex flex-col justify-start'>
              <h1 className='mt-4 text-5xl' data-fade='1'>
                Hi, I&apos;m Harambe
              </h1>
              <p className='mt-2 text-xl text-gray-700 dark:text-gray-200'>
                and this is my Zoo. I live here with my old zookeeper and banana, Big
                Yellow. Everything in here has a heart and a mind. One thing I&apos;ve
                learned after 17 years - you never know WHAT is gonna come over that
                enclosure.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

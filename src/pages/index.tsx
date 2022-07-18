import clsx from 'clsx';
import * as React from 'react';

import developerMessage from '@/lib/developerMessage';
import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

let saidHi = false;
export default function HomePage() {
  const isLoaded = useLoaded();

  if (!saidHi) {
    developerMessage();
    saidHi = true;
  }

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
          <div className='layout flex min-h-screen flex-col items-center justify-center '>
            <div className='flex flex-col items-center text-center md:items-start md:text-left'>
              <h1 className='my-4 text-4xl' data-fade='1'>
                Hi, I&apos;m Danny
              </h1>
              <p className='mt-4 text-sm md:text-lg 2xl:text-xl' data-fade='2'>
                Senior Software Engineer at Capital One.
                <br />
                Fullstack engineer with a background in AWS and React, with a
                strong interest in UI/UX.
              </p>
              <p className='text-md mt-8' data-fade='4'>
                <ArrowLink href='https://github.com/danielchines/dannyhines.io'>
                  See the repository
                </ArrowLink>
              </p>
              <ButtonLink
                className='mt-6'
                href='/projects'
                variant='light'
                data-fade='5'
              >
                View my Projects
              </ButtonLink>
            </div>

            {/* <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}

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
            'min-h-main mt-20 mb-20 flex flex-col',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='layout flex flex-col items-center justify-center text-center md:items-start md:text-left'>
            <div className=''>
              <h1 className='' data-fade='1'>
                Danny Hines
              </h1>
              <p
                className='my-4 text-sm text-gray-700 dark:text-gray-300 md:text-base 2xl:text-lg'
                data-fade='2'
              >
                I&apos;m a fullstack engineer with experience building the
                entire stack for web and mobile apps. I made this site to teach
                others and practice using TailwindCSS.
              </p>
              <p className='text-md mt-4' data-fade='4'>
                <ArrowLink href='https://github.com/danielchines/dannyhines.io'>
                  See this code on Github
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

              <div className='mt-24' data-fade='6'>
                <h2 className=''>My Projects</h2>
              </div>
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

import clsx from 'clsx';
import * as React from 'react';

import developerMessage from '@/lib/developerMessage';
import { getPostsByType } from '@/lib/mdx';
import { trackEvent } from '@/lib/umami';
import useLoaded from '@/hooks/useLoaded';

import { DynamicProfileImage } from '@/components/DynamicProfileImage';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import ProjectsSection from '@/components/ProjectsSection';
import Seo from '@/components/Seo';
import SubscribeBox from '@/components/SubsribeBox';

import { ProjectContent } from '@/types/Post';

let saidHi = process.env.NODE_ENV !== 'production';

export default function HomePage(props: { projects: ProjectContent[] }) {
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
            'min-h-main mt-4 mb-20 flex flex-col',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='layout flex flex-col items-center justify-center text-center md:items-start md:text-left'>
            <div className='flex flex-col-reverse items-center justify-center gap-4 sm:flex-row'>
              <div className='mt-0 w-full sm:mt-12 sm:w-3/4'>
                <h1 className='text-4xl sm:text-5xl' data-fade='1'>
                  Danny Hines
                </h1>
                <p
                  className='my-5 text-sm text-gray-700 dark:text-gray-300 md:text-base 2xl:text-lg'
                  data-fade='2'
                >
                  I&apos;m a software engineer at Capital One with experience building web
                  and mobile applications, mostly with React/NextJS and iOS.
                  <br />
                  <br />I built this site to keep track of what I&apos;ve learned and teach
                  others about software. It uses NextJS, TailwindCSS and is deployed with
                  Vercel.
                  <br />
                  <ArrowLink
                    href='https://github.com/danielchines/dannyhines.io'
                    className='mt-2'
                    onClick={() => trackEvent('[Home] View source code', 'external_link')}
                  >
                    View it on Github
                  </ArrowLink>
                </p>
                <div className='flex justify-center gap-3 sm:justify-start'>
                  <ButtonLink
                    className='mt-6'
                    href='/blog'
                    data-fade='5'
                    onClick={() => trackEvent('[Home] View blog', 'internal_link')}
                  >
                    Check out the blog
                  </ButtonLink>
                  <ButtonLink
                    className='mt-6'
                    href='/about'
                    variant='outline'
                    data-fade='5'
                    onClick={() => trackEvent('[Home] View about', 'internal_link')}
                  >
                    About me
                  </ButtonLink>
                </div>
              </div>
              <DynamicProfileImage data-fade='3' />
            </div>

            <div className='mt-8 w-full' data-fade='4'>
              <SubscribeBox />
            </div>

            <div className='mt-10 w-full' data-fade='6'>
              <ProjectsSection projects={props.projects} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getPostsByType('projects');
  return {
    props: { projects },
  };
}

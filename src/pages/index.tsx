import clsx from 'clsx';
import * as React from 'react';

import developerMessage from '@/lib/developerMessage';
import { getPostsByType } from '@/lib/mdx';
import { trackEvent } from '@/lib/umami';
import useLoaded from '@/hooks/useLoaded';

import { DynamicProfileImage } from '@/components/DynamicProfileImage';
import FeaturedPosts from '@/components/FeaturedPosts';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ProjectsSection from '@/components/ProjectsSection';
import Seo from '@/components/Seo';
import SubscribeBox from '@/components/SubscribeBox';

import { BlogContent, ProjectContent } from '@/types/Post';

let saidHi = process.env.NODE_ENV !== 'production';

export default function HomePage(props: {
  projects: ProjectContent[];
  featuredPosts: BlogContent[];
}) {
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
                  I&apos;m a software engineer at <strong>Capital One</strong> where I build
                  tools for financial wellbeing and customer servicing. I&apos;m most
                  proficient in web and mobile development, specifically React/NextJS and
                  SwiftUI.
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
              </div>

              <div
                className='flex w-1/2 max-w-[300px] flex-col pt-0 sm:w-1/4 sm:pt-16'
                data-fade='3'
              >
                <DynamicProfileImage />
              </div>
            </div>

            <div className='mt-4 w-full sm:mt-10' data-fade='5'>
              <SubscribeBox />
            </div>

            <div className='mt-10 w-full' data-fade='4'>
              <FeaturedPosts featuredPosts={props.featuredPosts} />
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
  const featuredBlogs = ['the-nikkei', 'encryption-vs-hashing', 'tether-ticking-time-bomb'];
  const blogs = await getPostsByType('blog');
  const featuredPosts = blogs.filter((content) => featuredBlogs.includes(content.slug));

  return {
    props: { projects, featuredPosts },
  };
}

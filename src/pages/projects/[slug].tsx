import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { SiGithub } from 'react-icons/si';

// import { trackEvent } from '@/lib/analytics';
import { getFileBySlug, getFiles } from '@/lib/mdx';

// import useContentMeta from '@/hooks/useContentMeta';
// import Comment from '@/components/content/Comment';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/PrimaryLink';
import MDXComponents from '@/components/MDXComponents';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { ProjectType } from '@/types/Post';

export default function ProjectPage({ code, meta }: ProjectType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  // const contentSlug = `p_${meta.slug}`;
  // const viewMetaData = useContentMeta(contentSlug, { runIncrement: true });

  return (
    <Layout>
      <Seo
        title={`${meta.title} – Danny Hines`}
        description={meta.description}
        image={`${meta.title}/header`}
        date={new Date(meta.publishedAt).toISOString()}
        type='article'
      />

      <main>
        <section className=''>
          <div className='layout'>
            <h1 className='mt-8 lg:text-4xl'>{meta.title}</h1>
            <div className='mt-4 mb-6 flex w-full flex-col items-start justify-between md:flex-row md:items-center'>
              <div className='flex items-center'>
                <NextImage
                  alt='Danny Hines'
                  height={25}
                  width={24}
                  sizes='20vw'
                  src='/images/me_small.jpeg'
                  className='rounded-full'
                  imgClassName='rounded-full'
                />

                <p className='ml-2 text-sm text-gray-700 dark:text-gray-300'>
                  {'Danny Hines • '}
                  {meta.readingTime.text}
                </p>
              </div>
              <p className='min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0'>
                Posted {format(new Date(meta.publishedAt), 'MMMM dd, yyyy')}
                {/* <ViewCounter slug={post.slug} /> */}
              </p>
            </div>

            {/* <hr className='mt-4 dark:border-gray-600' /> */}

            <section className=''>
              <article className='prose projects mdx dark:prose-dark mx-auto w-full transition-colors'>
                <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>
            </section>
            {meta.github && (
              <div className='inline-flex items-center gap-2'>
                <SiGithub className='text-lg text-gray-800 dark:text-white' />
                <CustomLink href={meta.github} className='mt-1'>
                  Repository
                </CustomLink>
              </div>
            )}
            {/* 
            <figure className='mt-12'>
              <Comment />
            </figure> */}

            <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
              <CustomLink
                href={`https://github.com/theodorusclarence/theodorusclarence.com/blob/main/src/contents/projects/${meta.slug}.mdx`}
              >
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/projects'>← Back to projects</CustomLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('projects');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('projects', params?.slug as string);

  return {
    props: { ...post },
  };
};

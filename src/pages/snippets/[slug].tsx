import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { SiGithub } from 'react-icons/si';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import { trackEvent } from '@/lib/umami';

import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/PrimaryLink';
import MDXComponents from '@/components/MDXComponents';
import Seo from '@/components/Seo';

import { SnippetType } from '@/types/Post';

export default function SnippetPage({ code, meta }: SnippetType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  // Add a period if there isn't one, make the description longer
  const endsWPeriod = meta.description.charAt(meta.description.length - 1) === '.';
  const descriptionAddOn = `${
    endsWPeriod ? '' : '.'
  } Feel free to copy and paste into your project.`;

  return (
    <Layout>
      <Seo
        templateTitle={meta.title}
        description={meta.description + descriptionAddOn}
        type='article'
      />

      <main>
        <section className=''>
          <div className='layout'>
            <h1 className='mt-8 lg:text-4xl'>{meta.title}</h1>
            <div className='prose my-6'>
              <blockquote className='dark:text-gray-400'>{meta.description}</blockquote>
            </div>
            <section>
              <article className='snippets mdx dark:prose-dark prose mx-auto w-full transition-colors'>
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

            <div>
              <div className='mt-8 flex items-start justify-between gap-4 '>
                <CustomLink href='/snippets'>← Back to snippets</CustomLink>
                <CustomLink
                  href={`https://github.com/dannyhines/dannyhines.io/issues/new?assignees=dannyhines&labels=typo&template=typo-in-blog-post.yml&title=Request+change+to+Snippet+"${meta.title}"`}
                  onClick={() =>
                    trackEvent('[Snippet] Request an edit on Github', 'external_link')
                  }
                  className='self-end'
                >
                  <SiGithub className='mr-2' /> Edit this on GitHub
                </CustomLink>
              </div>
              <div className='m-4 text-center'>
                <CustomLink
                  href='/blog'
                  onClick={() =>
                    trackEvent('[Snippet] View blog from Snippet', 'external_link')
                  }
                >
                  Check out the blog
                </CustomLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('snippets');

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
  const post = await getFileBySlug('snippets', params?.slug as string);

  return {
    props: { ...post },
  };
};

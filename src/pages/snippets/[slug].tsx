import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';

import { getFileBySlug, getFiles } from '@/lib/mdx';

import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/PrimaryLink';
import MDXComponents from '@/components/MDXComponents';
import Seo from '@/components/Seo';

import { SnippetType } from '@/types/Post';

export default function SnippetPage({ code, meta }: SnippetType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Seo
        title={meta.title}
        siteName='Danny Hines'
        description={meta.description}
        type='article'
      />

      <main>
        <section className=''>
          <div className='layout'>
            <h1 className='mt-8 lg:text-4xl'>{meta.title}</h1>
            <p className='my-6'>{meta.description}</p>
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

            <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
              <CustomLink
                href={`https://github.com/danielchines/dannyhines.io/src/content/snippets/${meta.slug}.mdx`}
              >
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/snippets'>← Back to snippets</CustomLink>
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

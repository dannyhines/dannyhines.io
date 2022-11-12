import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getPostsByType } from '@/lib/mdx';
import useLoaded from '@/hooks/useLoaded';

import BlogCard from '@/components/BlogCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { BlogContent } from '@/types/Post';

export default function BlogPage({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='The blog of Danny Hines'
        description='Some of my thoughts and tutorials, mostly about software development.'
      />
      <main>
        <section className={clsx('layout w-11/12 py-4', isLoaded && 'fade-in-start')}>
          <h1 data-fade='1'>Blog</h1>
          <p data-fade='2' className='mt-2 text-gray-600 dark:text-gray-300'>
            Some of my thoughts, side projects and tutorials, mostly about software
            development.
          </p>
          <ul data-fade='3' className='mt-6 grid gap-4 '>
            {blogPosts.map((post: BlogContent) => (
              <BlogCard key={post.slug} blog={post} />
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogPosts = await getPostsByType('blog');

  return { props: { blogPosts } };
}

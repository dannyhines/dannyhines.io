import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { trackEvent } from '@/lib/umami';

import BlogCard from '@/components/cards/BlogCard';
import ArrowLink from '@/components/links/ArrowLink';

import { BlogContent } from '@/types/Post';

type ComponentProps = {
  featuredPosts: BlogContent[];
} & React.ComponentPropsWithoutRef<'div'>;

export default function FeaturedPosts({
  featuredPosts,
  className,
  ...rest
}: ComponentProps) {
  return (
    <div className={clsxm('py-4', className)} {...rest}>
      <h2 className='text-2xl sm:text-3xl'>Featured Posts</h2>
      {/* <p className='mt-2 text-gray-600 dark:text-gray-300'>
        Some stuff I&apos;ve been working on.
      </p> */}
      <ul className='mt-6 grid gap-4 '>
        {featuredPosts.map((post: BlogContent) => (
          <BlogCard key={post.slug} blog={post} />
        ))}
      </ul>
      <ArrowLink
        href='/blog'
        className='mt-4'
        onClick={() => trackEvent('[Home] View blog', 'internal_link')}
      >
        View all
      </ArrowLink>
    </div>
  );
}

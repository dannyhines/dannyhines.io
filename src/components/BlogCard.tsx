import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

// import TechIcons, { TechListType } from '@/components/TechIcons';
import { BlogContent } from '@/types/Post';

type BlogCardProps = {
  blog: BlogContent;
} & React.ComponentPropsWithoutRef<'li'>;

export default function BlogCard({ blog, className }: BlogCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-lg md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/blog/${blog.slug}`}
        className='flex flex-col items-center rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300 sm:flex-row'
      >
        <div className='relative h-full w-full sm:m-0 md:w-[220px]'>
          <NextImage
            layout='responsive'
            className='pointer-events-none h-full w-full'
            imgClassName='sm:rounded-bl-md sm:rounded-tr-none rounded-tr-md rounded-tl-md rounded-bl-none'
            src={`/images/${blog.slug}/header.png`}
            alt={blog.title}
            width={300}
            height={200}
          />
        </div>
        <div className='ml-4 flex flex-col items-start justify-start p-4'>
          <h4 className='mb-2'>{blog.title}</h4>
          <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
            {blog.description}
          </p>

          <p className='animated-underline mt-2 inline-block font-medium'>Read more →</p>
        </div>
      </UnstyledLink>
    </li>
  );
}

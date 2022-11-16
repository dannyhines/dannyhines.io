import clsx from 'clsx';
import * as React from 'react';

import CloudinaryImg from '@/components/CloudinaryImage';
import UnstyledLink from '@/components/links/UnstyledLink';

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
        <div className='relative h-full w-full sm:m-0 sm:max-w-[220px]'>
          <CloudinaryImg
            publicId={blog.headerImg}
            alt={blog.title}
            width={600}
            height={400}
            preview={false}
          />
        </div>
        <div className='flex flex-col items-start justify-start p-4 sm:ml-6 sm:p-0'>
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

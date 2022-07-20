import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

// import TechIcons, { TechListType } from '@/components/TechIcons';
import { ProjectContent } from '@/types/Post';

type ProjectCardProps = {
  project: ProjectContent;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/projects/${project.slug}`}
        className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        <h4 className='my-2'>{project.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {project.description}
        </p>
        {/* <div className='mt-2'>
          <TechIcons techs={project.techs.split(',') as Array<TechListType>} />
        </div> */}

        <NextImage
          layout='intrinsic'
          className='pointer-events-none mt-3 w-full'
          src={`/images/${project.headerImg}`}
          alt={project.title}
          width={300}
          height={200}
          // preview={false}
        />

        <p className='animated-underline mt-2 inline-block font-medium'>
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}

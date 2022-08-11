import clsx from 'clsx';
import * as React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import useLoaded from '@/hooks/useLoaded';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { ProjectContent } from '@/types/Post';

type ProjectCardProps = {
  project: ProjectContent;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const isLoaded = useLoaded();
  if (!isLoaded) {
    return null;
  }
  const { blog, github, link, headerImg } = project;
  return (
    <li
      className={clsx(
        'project-card rounded-lg md:w-full',
        'bg-white dark:bg-transparent',
        'border dark:border-gray-700 ',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={blog ? `/blog/${blog}` : github ?? link ?? ''}
        className='flex flex-col items-start rounded-md p-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        <NextImage
          layout='intrinsic'
          className='pointer-events-none w-full'
          imgClassName='rounded-lg'
          src={`/images/${headerImg}`}
          alt={project.title}
          width={600}
          height={360}
          sizes='40vw'
        />
        <h4 className='mt-2 mb-2'>{project.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {project.description}
        </p>
        <div className='mt-2 flex w-full max-w-sm justify-start space-x-4 align-middle'>
          {project.blog && (
            <p className='animated-underline mt-1 inline-block font-semibold'>
              Read more →
            </p>
          )}
        </div>
      </UnstyledLink>

      <div className='absolute bottom-4 right-5 flex gap-4'>
        {isLoaded && project.github && (
          <UnstyledLink href={project.github}>
            <SiGithub className='mt-2 text-2xl text-primary-600 hover:scale-125 dark:text-primary-500' />
          </UnstyledLink>
        )}

        {isLoaded && project.link && (
          <UnstyledLink href={`${project.link}`}>
            <HiOutlineExternalLink className='mt-1 text-3xl text-primary-600 hover:scale-125 dark:text-primary-500' />
          </UnstyledLink>
        )}
      </div>
    </li>
  );
}

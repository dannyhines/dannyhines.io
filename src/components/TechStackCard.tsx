import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { TechStack } from '@/types/TechStack';

type TechStackCardProps = {
  tech: TechStack;
} & React.ComponentPropsWithoutRef<'li'>;

export default function TechStackCard({ tech, className }: TechStackCardProps) {
  return (
    <li
      className={clsx(
        'md:max-w-1/3 rounded-md',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={tech.link}
        className='flex flex-col items-center p-4 text-center focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        {tech.icon}
        <h4 className='my-2 text-xl font-medium'>{tech.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {tech.description}
        </p>
      </UnstyledLink>
    </li>
  );
}

import React from 'react';

import ProjectCard from '@/components/cards/ProjectCard';

import { ProjectContent } from '@/types/Post';

function ProjectsSection(props: { projects: ProjectContent[]; isStandalone?: boolean }) {
  const { projects, isStandalone } = props;
  return (
    <section className='layout w-full py-4'>
      {isStandalone ? (
        <h1 data-fade='1' className='mt-10'>
          Projects
        </h1>
      ) : (
        <h2 className='text-2xl sm:text-3xl' data-fade='0'>
          Projects
        </h2>
      )}
      <p
        data-fade={isStandalone ? '3' : '0'}
        className='mt-2 text-gray-600 dark:text-gray-300'
      >
        Some of my public-facing work and side projects.
      </p>

      <ul
        data-fade={isStandalone ? '4' : '0'}
        className='mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
      >
        {projects.map((project: ProjectContent) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;

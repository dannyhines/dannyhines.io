import React from 'react';

import ProjectCard from '@/components/ProjectCard';

import { ProjectContent } from '@/types/Post';

function ProjectsSection(props: { projects: ProjectContent[]; fadeIn?: boolean }) {
  const { projects, fadeIn } = props;
  return (
    <section className='layout w-full py-4'>
      <h1 data-fade={fadeIn ? '2' : '0'}>Projects</h1>
      <p data-fade={fadeIn ? '3' : '0'} className='mt-2 text-gray-600 dark:text-gray-300'>
        Some stuff I&apos;ve been working on.
      </p>

      <ul
        data-fade={fadeIn ? '4' : '0'}
        className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
      >
        {projects.map((project: ProjectContent) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;

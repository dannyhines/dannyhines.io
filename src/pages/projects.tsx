import clsx from "clsx";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

import { getPostsByType } from "@/lib/mdx";
import useLoaded from "@/hooks/useLoaded";

import Layout from "@/components/layout/Layout";
import ProjectsSection from "@/components/ProjectsSection";
import Seo from "@/components/Seo";

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle="Projects"
        description="Showcase of my side projects."
      />
      <main>
        <div className={clsx(isLoaded && "fade-in-start")}>
          <ProjectsSection projects={projects} fadeIn={true} />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getPostsByType("projects");

  return { props: { projects } };
}

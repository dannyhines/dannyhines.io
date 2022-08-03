import clsx from "clsx";
import * as React from "react";

import developerMessage from "@/lib/developerMessage";
import { getPostsByType } from "@/lib/mdx";
import useLoaded from "@/hooks/useLoaded";

import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";
import ProjectsSection from "@/components/ProjectsSection";
import Seo from "@/components/Seo";

import { ProjectContent } from "@/types/Post";

let saidHi = process.env.NODE_ENV !== "production";

export default function HomePage(props: { projects: ProjectContent[] }) {
  const isLoaded = useLoaded();

  if (!saidHi) {
    developerMessage();
    saidHi = true;
  }

  return (
    <Layout>
      <Seo />
      <main>
        <section
          className={clsx(
            "min-h-main mt-20 mb-20 flex flex-col",
            isLoaded && "fade-in-start"
          )}
        >
          <div className="layout flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row">
              <div className="w-full sm:w-3/4">
                <h1 className="" data-fade="1">
                  Danny Hines
                </h1>
                <p
                  className="my-5 text-sm text-gray-700 dark:text-gray-300 md:text-base 2xl:text-lg"
                  data-fade="2"
                >
                  I&apos;m a fullstack engineer with experience building
                  fullstack web and mobile apps. My expertise is in
                  React/NextJS, iOS development with SwiftUI, and I can
                  provision just about anything with AWS (if I&apos;m allowed to
                  Google stuff). I also love building and learning new things,
                  so I made this site to keep track of what I&apos;ve learned
                  and teach others about software.
                  <br />
                  <br />
                  This site uses NextJS and is deployed using{" "}
                  <UnderlineLink href="https://vercel.com">
                    Vercel
                  </UnderlineLink>
                  , with TailwindCSS for styling.
                  <br />
                  <ArrowLink
                    href="https://github.com/danielchines/dannyhines.io"
                    className="mt-4"
                  >
                    View it on Github
                  </ArrowLink>
                </p>
                <div className="flex gap-3">
                  <ButtonLink
                    className="mt-6"
                    href="/blog"
                    variant="primary"
                    data-fade="5"
                  >
                    Check out the blog
                  </ButtonLink>
                  <ButtonLink
                    className="mt-6"
                    href="/about"
                    variant="light"
                    data-fade="5"
                  >
                    About me
                  </ButtonLink>
                </div>
              </div>
              <NextImage
                src="/images/me-transparent.png"
                alt="Me"
                className="max-w-2/3 w-2/3 p-8 sm:w-1/4 sm:p-0"
                data-fade="3"
                width={1795}
                height={2032}
              />
            </div>
            <hr />

            <div className="mt-24 w-full" data-fade="6">
              <ProjectsSection projects={props.projects} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getPostsByType("projects");
  return {
    props: { projects },
  };
}

import clsx from "clsx";
import * as React from "react";

import useLoaded from "@/hooks/useLoaded";

import Layout from "@/components/layout/Layout";
import PrimaryLink from "@/components/links/PrimaryLink";
import NextImage from "@/components/NextImage";
import Seo from "@/components/Seo";

export default function About() {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo />
      <main>
        <section
          className={clsx(
            "min-h-main mt-6 mb-20 flex flex-col",
            isLoaded && "fade-in-start"
          )}
        >
          <div className="layout flex flex-col items-center justify-center gap-3 text-left sm:items-start">
            <h1 className="mb-3 text-3xl sm:mb-4 md:text-4xl" data-fade="1">
              Hi, I&apos;m{" "}
              <span className="text-primary-700 dark:text-primary-400">
                Danny
              </span>
            </h1>

            <div className="flex w-full flex-col items-center sm:flex-row">
              <p
                className="text-sm text-gray-700 dark:text-gray-300 sm:w-4/5 sm:text-base"
                data-fade="2"
              >
                I started coding in the Spring of my freshman year at college.
                The class taught the basics of programming and a language called
                Matlab: a mathy,{" "}
                <PrimaryLink href="https://www.mathworks.com/help/matlab/learn_matlab/matrices-and-arrays.html">
                  matrix-based
                </PrimaryLink>{" "}
                language for handling data. At the time I knew the assignments
                were boring, but I was totally hooked and changed my major from
                Mechanical Engineering to Computer Science before the semester
                was over.
                <br />
                <br />
                For work I&apos;ve built Chrome extensions and web apps, APIs
                and AWS infrastructure. Personally and professionally I&apos;ve
                handled authentication, CI/CD, database migrations, E2E testing,
                the whole shabang.
                <br />
                <br />
                Originally I made this site because I wanted to show off my side
                projects. I&apos;ve also heard good things about{" "}
                <PrimaryLink href="https://tailwindcss.com/">
                  TailwindCSS
                </PrimaryLink>{" "}
                and I thought this would be a good way to kill two birds at
                once, or whatever.
              </p>
              <NextImage
                src="/images/me-large.jpg"
                alt="Me"
                className="max-w-11/12 float-right w-11/12 p-8 sm:ml-4 sm:w-2/5 sm:p-0"
                data-fade="3"
                imgClassName="rounded-md"
                width={2796}
                height={3225}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

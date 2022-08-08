import clsx from "clsx";
import * as React from "react";

import useLoaded from "@/hooks/useLoaded";

import Layout from "@/components/layout/Layout";
import PrimaryLink from "@/components/links/PrimaryLink";
import UnderlineLink from "@/components/links/UnderlineLink";
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
                width={2621}
                height={2612}
              />
            </div>

            <div className="mt-8">
              <h2>About this site</h2>
              <p className="mt-4">
                I built this website using{" "}
                <UnderlineLink href="https://nextjs.org/">NextJS</UnderlineLink>{" "}
                and deployed it using{" "}
                <UnderlineLink href="https://vercel.com">Vercel</UnderlineLink>,
                the company behind NextJS. It&apos;s my new favorite way to make
                websites because you can use React with server-side rendering,
                which is a boost to performance and SEO.
              </p>
              <div className="text-center">
                <NextImage
                  src="/images/about-vercel.png"
                  alt="Vercel"
                  className="mx-auto my-8 max-w-full"
                  imgClassName="rounded-md"
                  width={800}
                  height={419}
                />
              </div>
              <p className="mt-4">
                Credit to Theodorus Clarence&apos;s{" "}
                <UnderlineLink href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter">
                  Next.js + Tailwind CSS + TypeScript
                </UnderlineLink>{" "}
                starter project that let me hit the ground running. It has a
                handful of components created for you that you&apos;d normally
                copy-paste from a previous project, like buttons and links. It
                also comes linting rules pre-configured with{" "}
                <UnderlineLink href="https://typicode.github.io/husky/#/">
                  Husky
                </UnderlineLink>
                , and an {"<Seo />"} component that can simplify the tags for
                different pages.
              </p>
              <p className="mt-4">
                I was reluctant to use a template for my personal website, but
                it removed the need for so much boilerplate code that I
                couldn&apos;t pass it up.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

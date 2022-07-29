import clsx from "clsx";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

import { getPostsByType } from "@/lib/mdx";
import useLoaded from "@/hooks/useLoaded";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import SnippetCard from "@/components/SnippetCard";

import { SnippetContent } from "@/types/Post";

export default function SnippetsPage({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle="Snippets"
        description="A collection of code snippets that I thought were worth saving."
      />

      <main>
        <section
          className={clsx("layout w-11/12 py-4", isLoaded && "fade-in-start")}
        >
          <h1 data-fade="1">Snippets</h1>
          <p data-fade="2" className="mt-2 text-gray-600 dark:text-gray-300">
            A collection of code snippets, settings and other pieces of code
            that I thought were worth sharing.
          </p>

          <ul
            data-fade="3"
            className="mt-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3"
          >
            {snippets.map((snippet: SnippetContent) => (
              <SnippetCard key={snippet.slug} snippet={snippet} />
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const snippets = await getPostsByType("snippets");

  return { props: { snippets } };
}

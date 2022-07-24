import clsx from "clsx";
import * as React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";

// import TechIcons, { TechListType } from '@/components/TechIcons';
import { SnippetContent } from "@/types/Post";

type SnippetCardProps = {
  snippet: SnippetContent;
} & React.ComponentPropsWithoutRef<"li">;

export default function SnippetCard({ snippet, className }: SnippetCardProps) {
  return (
    <li
      className={clsx(
        "rounded-md md:w-full",
        "border dark:border-gray-600",
        "scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        "animate-shadow",
        className
      )}
    >
      <UnstyledLink
        href={`/snippets/${snippet.slug}`}
        className="flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
      >
        <h4 className="my-2">{snippet.title}</h4>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
          {snippet.description}
        </p>
        {/* <div className='mt-2'>
          <TechIcons techs={snippet.techs.split(',') as Array<TechListType>} />
        </div> */}
        <p className="animated-underline mt-2 inline-block font-medium">
          Check it out →
        </p>
      </UnstyledLink>
    </li>
  );
}

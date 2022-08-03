import clsx from "clsx";
import * as React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";

// import TechIcons, { TechListType } from '@/components/TechIcons';
import { BlogContent } from "@/types/Post";

type BlogCardProps = {
  blog: BlogContent;
} & React.ComponentPropsWithoutRef<"li">;

export default function BlogCard({ blog, className }: BlogCardProps) {
  return (
    <li
      className={clsx(
        "rounded-lg md:w-full",
        "border dark:border-gray-600",
        "scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        "animate-shadow",
        className
      )}
    >
      <UnstyledLink
        href={`/blog/${blog.slug}`}
        className="flex flex-col items-center rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 sm:flex-row"
      >
        <div className="mb-4 w-1/2 rounded-md sm:m-0 sm:w-1/3 md:w-1/4 lg:w-1/6 ">
          <NextImage
            layout="responsive"
            className="pointer-events-none w-full rounded-md"
            imgClassName="rounded-md"
            src={`/images/${blog.slug}/header.png`}
            alt={blog.title}
            width={120}
            height={70}
            sizes="20vw"
            // preview={false}
          />
        </div>
        <div className="ml-4 flex flex-col items-start justify-start">
          <h4 className="mb-2">{blog.title}</h4>
          <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
            {blog.description}
          </p>
          {/* <div className='mt-2'>
          <TechIcons techs={blog.tags.split(',') as string[]} />
        </div> */}

          <p className="animated-underline mt-2 inline-block font-medium">
            See more →
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
}

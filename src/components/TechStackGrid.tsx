import clsx from 'clsx';
import * as React from 'react';
import {
  SiAmazonaws,
  SiNextdotjs,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
} from 'react-icons/si';

import TechStackCard from '@/components//cards/TechStackCard';

import { TechStack } from '@/types/TechStack';

const ICON_SIZE = 40;

const TECH_STACK: TechStack[] = [
  {
    title: 'NextJS',
    description: "My new favorite way to build websites. It's React, but better.",
    icon: (
      <SiNextdotjs
        size={ICON_SIZE}
        color='#1C252C'
        className='rounded-full p-[1px] dark:bg-white'
      />
    ),
    link: 'https://nextjs.org/',
  },
  {
    title: 'Typescript',
    description: 'The flexibility of Javascript, with around 35% fewer bugs',
    icon: <SiTypescript size={ICON_SIZE} color='#2F74C0' />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'AWS',
    description: 'Who cares about UX when they add 10 features a week?',
    icon: <SiAmazonaws size={ICON_SIZE} color='#F29000' />,
    link: 'https://aws.amazon.com/',
  },
  {
    title: 'iOS (SwiftUI)',
    description: 'SwiftUI makes developing iOS apps more fun',
    icon: <SiSwift size={ICON_SIZE} color='#EC4125' />,
    link: 'https://developer.apple.com/xcode/swiftui/',
  },
  {
    title: 'TailwindCSS',
    description: 'Now I understand the hype. Tailwind is flow state.',
    icon: <SiTailwindcss size={ICON_SIZE} color='rgb(56, 189, 248)' />,
    link: 'https://tailwindcss.com/',
  },
  {
    title: 'VS Code',
    description: 'Coding without VSCode extensions is like skateboarding on grass.',
    icon: <SiVisualstudio size={ICON_SIZE} color='#147EC3' />,
    link: 'https://code.visualstudio.com/',
  },
];

export default function TechStackGrid({ className }: React.ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul className={clsx('grid grid-cols-2 gap-4 md:grid-cols-3', className)}>
      {TECH_STACK.map((item: TechStack) => (
        <TechStackCard tech={item} key={item.title.replace(' ', '-')} />
      ))}
    </ul>
  );
}

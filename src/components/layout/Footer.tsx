import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from 'react-icons/si';

import { trackEvent } from '@/lib/umami';

import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home', internal: true },
  { href: '/about', label: 'About', internal: true },
  { href: '/blog', label: 'Blog', internal: true },
  { href: '/projects', label: 'Projects', internal: true },
  { href: '/snippets', label: 'Snippets', internal: true },
  {
    href: 'https://github.com/dannyhines/dannyhines.io',
    label: 'Source code',
    internal: false,
  },
  { href: 'mailto:royalty_pitons_0v@icloud.com', label: 'Contact me', internal: false },
];

export default function Footer() {
  return (
    <>
      <footer className='pt-8 pb-6 '>
        <div className='layout mx-auto'>
          <hr className='my-6 dark:border-gray-700' />

          <div className='mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 py-4 md:w-10/12 md:justify-between'>
            {links.map(({ href, label, internal }) => (
              <div key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='dark:opacity-80 dark:hover:opacity-100'
                  onClick={() =>
                    trackEvent(
                      '[Footer] Navigate to ' + label,
                      `${internal ? 'internal' : 'external'}_link`
                    )
                  }
                >
                  {label}
                </UnstyledLink>
              </div>
            ))}
          </div>

          <div className='w-full flex-col py-6 text-center'>
            <div className='flex justify-center gap-4'>
              <PrimaryLink
                className='align-center dark:text-red h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal  shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='https://github.com/dannyhines'
                aria-label='View my Github profile'
                onClick={() => trackEvent('[Footer] View Github', 'external_link')}
              >
                <SiGithub className='text-xl text-black dark:text-gray-200 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal  shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='https://twitter.com/dannyhines_'
                aria-label='View my Twitter profile'
                onClick={() => trackEvent('[Footer] View Twitter', 'external_link')}
              >
                <SiTwitter className='text-xl text-blue-400 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='https://www.linkedin.com/in/danny-hines-b10483121/'
                aria-label='View my LinkedIn profile'
                onClick={() => trackEvent('[Footer] View LinkedIn', 'external_link')}
              >
                <SiLinkedin className='text-xl text-blue-600 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal  shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='mailto:royalty_pitons_0v@icloud.com'
                aria-label='Send me an email'
                onClick={() => trackEvent('[Footer] Send Email', 'external_link')}
              >
                <SiGmail className='text-xl text-red-600 md:text-2xl' />
              </PrimaryLink>
            </div>
          </div>

          <div className='mt-4 mb-10 text-center text-xs text-gray-400 dark:text-gray-500'>
            Copyright © {new Date().getFullYear()} Danny Hines
          </div>
        </div>
      </footer>
    </>
  );
}

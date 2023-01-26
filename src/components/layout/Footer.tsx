import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from 'react-icons/si';

import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <>
      <footer className='pt-8 pb-6 '>
        <div className='layout mx-auto'>
          <hr className='my-6 dark:border-gray-700' />

          <div className='mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 py-4 md:w-10/12 md:justify-between'>
            <UnstyledLink href='/home' className='dark:opacity-80 dark:hover:opacity-100'>
              Home
            </UnstyledLink>
            <UnstyledLink href='/about' className='dark:opacity-80 dark:hover:opacity-100'>
              About
            </UnstyledLink>
            <UnstyledLink href='/blog' className='dark:opacity-80 dark:hover:opacity-100'>
              Blog
            </UnstyledLink>
            <UnstyledLink
              href='/projects'
              className='dark:opacity-80 dark:hover:opacity-100'
            >
              Projects
            </UnstyledLink>
            <UnstyledLink
              href='/snippets'
              className='dark:opacity-80 dark:hover:opacity-100'
            >
              Snippets
            </UnstyledLink>
            <UnstyledLink
              href='https://github.com/dannyhines/dannyhines.io'
              className='dark:opacity-80 dark:hover:opacity-100'
            >
              Source code
            </UnstyledLink>
            <UnstyledLink
              href='mailto:royalty_pitons_0v@icloud.com'
              className='dark:opacity-80 dark:hover:opacity-100'
            >
              Contact me
            </UnstyledLink>
          </div>

          <div className='w-full flex-col py-6 text-center'>
            {/* <h5 className='my-4 text-xl font-semibold opacity-90'>Let&apos;s connect</h5> */}
            <div className='flex justify-center gap-4'>
              <PrimaryLink
                className='align-center dark:text-red h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal  shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='https://github.com/dannyhines'
                aria-label='View my Github profile'
              >
                <SiGithub className='text-xl text-black dark:text-gray-200 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal  shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='https://twitter.com/dannyhines_'
                aria-label='View my Twitter profile'
              >
                <SiTwitter className='text-xl text-blue-400 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='https://www.linkedin.com/in/danny-hines-b10483121/'
                aria-label='View my LinkedIn profile'
              >
                <SiLinkedin className='text-xl text-blue-600 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal  shadow-lg outline-none focus:outline-none dark:bg-gray-800 md:h-12 md:w-12'
                href='mailto:royalty_pitons_0v@icloud.com'
                aria-label='Send me an email'
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

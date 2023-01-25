import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from 'react-icons/si';

import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <>
      <footer className='pt-8 pb-6 '>
        <div className='layout mx-auto'>
          <hr className='my-6' />

          <div className='mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 py-4 md:w-10/12 md:justify-between'>
            <UnstyledLink href='/about'>About</UnstyledLink>
            <UnstyledLink href='/blog'>Blog</UnstyledLink>
            <UnstyledLink href='/projects'>Projects</UnstyledLink>
            <UnstyledLink href='/snippets'>Snippets</UnstyledLink>
            <UnstyledLink href='https://github.com/dannyhines/dannyhines.io'>
              Source code
            </UnstyledLink>
            <UnstyledLink href='mailto:royalty_pitons_0v@icloud.com'>
              Contact me
            </UnstyledLink>
          </div>

          <div className='w-full flex-col py-8 text-center'>
            {/* <h4 className='md:text-2xl font-semibold'>Let&apos;s connect</h4> */}
            <h5 className='my-4 text-xl font-semibold text-gray-700'>Let&apos;s connect</h5>
            <div className='flex justify-center gap-4'>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal text-black shadow-lg outline-none focus:outline-none md:h-12 md:w-12'
                href='https://github.com/dannyhines'
                aria-label='View my Github profile'
              >
                <SiGithub className='text-xl text-black md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal text-blue-400 shadow-lg outline-none focus:outline-none md:h-12 md:w-12'
                href='https://twitter.com/dannyhines_'
                aria-label='View my Twitter profile'
              >
                <SiTwitter className='text-xl text-blue-400 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal text-blue-600 shadow-lg outline-none focus:outline-none md:h-12 md:w-12'
                href='https://www.linkedin.com/in/danny-hines-b10483121/'
                aria-label='View my LinkedIn profile'
              >
                <SiLinkedin className='text-xl text-blue-600 md:text-2xl' />
              </PrimaryLink>
              <PrimaryLink
                className='align-center h-10 w-10 items-center justify-center rounded-full bg-white p-2 font-normal text-red-600 shadow-lg outline-none focus:outline-none md:h-12 md:w-12'
                href='mailto:royalty_pitons_0v@icloud.com'
                aria-label='Send me an email'
              >
                <SiGmail className='text-xl text-red-600 md:text-2xl' />
              </PrimaryLink>
            </div>
          </div>

          <div className='mt-8 mb-8 text-center text-sm text-gray-400'>
            Copyright © {new Date().getFullYear()} Danny Hines
          </div>
        </div>
      </footer>
    </>
  );
}

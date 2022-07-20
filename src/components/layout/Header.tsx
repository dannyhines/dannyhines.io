import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/snippets', label: 'Snippets' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // We can't show/change the theme until the client renders
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className='sticky top-0 z-50 bg-gray-50 dark:bg-dark'>
      <div className='layout flex h-14 items-center justify-between'>
        <nav>
          <ul className='flex items-start justify-between space-x-8'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsx(
                    'text-gray-700 hover:text-gray-600 dark:text-gray-300 ',
                    href === '/' && 'font-bold'
                  )}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          variant={(theme as 'light' | 'dark') ?? 'light'}
        >
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </Button>
      </div>
    </header>
  );
}

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/blog', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
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
    <header className='sticky top-0 z-50 bg-white dark:bg-dark'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
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

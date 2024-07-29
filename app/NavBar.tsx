'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const links = [
  {
    label: 'Dashboard',
    href: '/',
  },
  {
    label: 'Issues',
    href: '/issues',
  },
];

function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(
              {
                'text-zinc-900 dark:text-zinc-100': link.href === currentPath,
                'text-zinc-500 dark:text-zinc-400': link.href !== currentPath,
              },
              ' hover:text-zinc-800  dark:hover:text-zinc-300 transition-colors',
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

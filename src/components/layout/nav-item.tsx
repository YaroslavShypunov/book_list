'use client';
import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

interface INavItem {
  name: string;
  href: (typeof ROUTES)[keyof typeof ROUTES];
}

const NavItem = ({ name, href }: INavItem) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === href, [pathname, href]);
  return (
    <li
      className={clsx(
        'rounded-md p-2 transition-all text-gray-400 hover:bg-secondary hover:text-white',
        {
          'bg-secondary text-white': isActive,
        },
      )}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default React.memo(NavItem);

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = (link: LinkProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname == link.link) {
    isActive = true;
  }

  return (
    <Link href={link.link} className='text-black text-2xl hover:text-red'>
      {link.label}
    </Link>
  );
};

export default NavLink;

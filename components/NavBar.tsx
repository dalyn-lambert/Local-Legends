import NavLink from './NavLink';

export type LinkData = { label: string; route: string };

const links: LinkData[] = [
  { label: 'EVENTS', route: '/events' },
  { label: 'MATCHES', route: '/' },
  { label: 'CHANNELS', route: '/channels' },
];

const NavBar = () => {
  return (
    <div className='bg-lt-gray flex justify-between drop-shadow-md hover:drop-shadow-xl rounded-full items-center w-2/3 h-16 my-4 px-14'>
      {links.map((link) => (
        <NavLink key={link.label} link={link} />
      ))}
    </div>
  );
};

export default NavBar;

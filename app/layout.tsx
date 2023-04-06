import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Local Legends',
  description: 'Browse melee vods from local tournaments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-purple flex justify-center'>
        <div className='bg-lt-gray flex justify-between rounded-full items-center w-2/3 h-16 mt-4 px-14'>
          <Link href='/events' className='text-black text-2xl hover:text-red'>
            EVENTS
          </Link>
          <Link href='/' className='text-black text-2xl hover:text-red'>
            MATCHES
          </Link>
          <Link href='/channels' className='text-black text-2xl hover:text-red'>
            CHANNELS
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}

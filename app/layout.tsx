import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Local Legends',
  description: 'Browse melee vods from local tournaments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-purple grid grid-cols-1 h-screen w-screen content-start justify-items-center'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

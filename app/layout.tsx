import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Local Legends',
  description: 'Browse melee vods from local tournaments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-purple flex h-screen w-screen justify-center'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

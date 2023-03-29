import './globals.css';

export const metadata = {
  title: 'Local Legends',
  description: 'Browse melee vods from local tournaments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

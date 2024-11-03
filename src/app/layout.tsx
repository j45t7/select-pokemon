import type { Metadata } from 'next';
import './globals.css';
import { IBM_VGA_FONT } from '@/fonts';

export const metadata: Metadata = {
  title: 'Select Pokemon',
  description: 'Select a pokemon app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${IBM_VGA_FONT.className} `}>{children}</body>
    </html>
  );
}

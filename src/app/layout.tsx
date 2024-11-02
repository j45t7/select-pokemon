import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const ibmVgaFont = localFont({
  src: './fonts/IBM_VGA.woff',
});

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
      <body className={`${ibmVgaFont.className} `}>{children}</body>
    </html>
  );
}

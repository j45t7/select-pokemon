import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const ibmVgaFont = localFont({
  src: './fonts/IBM_VGA.woff',
  variable: '--font-ibm-vga',
  weight: '100 900',
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
      <body className={`${ibmVgaFont.variable} `}>{children}</body>
    </html>
  );
}

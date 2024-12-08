import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import "./globals.css";

export const metadata = {
  title: "Ecoverse",
  description: "Construindo hoje pensando no amanhã",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

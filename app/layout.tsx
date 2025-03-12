
import { Analytics } from '@vercel/analytics/react';
import TopNav from '../components/topNav'
import './globals.css'
import '@fontsource-variable/overpass'
import '@fontsource/rajdhani';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: 'Brent Hoffmann',
  description: 'Brent Hoffmann - Front End Developer',
  viewport: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <div className="page__wrapper">
          <TopNav></TopNav>
          <main className="w-full text-white">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  )
}

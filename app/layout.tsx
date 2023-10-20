import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeProvider from '@/components/Theme/ThemeProvider'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'jeanConf - Fiesta de la comunidad',
  description: 'Fiesta de cumpleaños de jean por su cumpleaños número 18',
  openGraph: {
    title: 'jeanConf - Fiesta de la comunidad',
    description: 'Fiesta de cumpleaños de jean por su cumpleaños número 18',
    url: 'https://cupcake-two.vercel.app',
    type: 'website',
    locale: 'es_ES',
    siteName: 'jeanConf',
    images: [
      {
        url: 'https://cupcake-two.vercel.app/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'jeanConf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'jeanConf - Fiesta de la comunidad',
    description: 'Fiesta de cumpleaños de jean por su cumpleaños número 18',
    creator: '@gartiel23',
    images: [
      {
        url: 'https://cupcake-two.vercel.app/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'jeanConf'
      }
    ]
  },
  category: 'Entertainment',
  themeColor: '#000000',
  colorScheme: 'dark',
  authors: [
    {
      name: 'Jeancarlo Morales',
      url: 'https://github.com/jcodev2'
    }
  ],
  creator: 'Jeancarlo Morales'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

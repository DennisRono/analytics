import type { Metadata } from 'next'
import '@/styles/globals.scss'
import '@/styles/output.scss'
import { NextUIProvider } from '@nextui-org/react'
import Providers from '@/store/redux-provider'
import Theme from '@/middlewares/Theme'

export const metadata: Metadata = {
  title: 'Analytics',
  description: 'nullchemy analytics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="utilities">
        <Providers>
          <Theme>
            <NextUIProvider>{children}</NextUIProvider>
          </Theme>
        </Providers>
      </body>
    </html>
  )
}

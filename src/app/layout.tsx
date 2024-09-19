import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { NextUIProvider } from '@nextui-org/react'

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
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}

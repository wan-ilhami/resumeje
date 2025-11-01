import { Providers } from '@/providers'
import './globals.css'
import pkg from '../../package.json'

const version = pkg.version

export const metadata = {
  title: 'Resume Builder',
  description: 'Create Professional Resumes Easily',
  icons: {
    icon: "/icon.svg",
  },
  generator: `Resume Builder v${version}`,
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
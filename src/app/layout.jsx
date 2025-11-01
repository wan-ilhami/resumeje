import { Providers } from './providers/page'
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

  if (process.env.NODE_ENV === 'development') {
  console.log(`🧱 Resume Builder v${version}`)
}

  return (
    <html lang="en" suppressHydrationWarning>
      {/* <link rel="shortcut icon" href="" /> */}
      <body className="min-h-screen antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
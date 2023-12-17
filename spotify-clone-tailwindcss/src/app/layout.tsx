import type { Metadata } from 'next'
import './globals.css'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Spotify Nextjs',
  description: 'next app + tailwind'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-900 text-zinc-50'>
        <div className="h-screen flex flex-col">
          <div className="flex flex-grow max-h-[calc(100vh-73px)]">
            <SideBar />

            {children}
          </div>

          <Footer />
        </div>

      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ButtonFloatWttp } from './components/Buttons'
import { GoogleTagManager } from '@next/third-parties/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '500',
})

export const metadata: Metadata = {
  title: 'Lage Costa Advocacia',
  description:
    'Consultoria especializada em direito previdenciário. Solucionamos questões relacionadas a aposentadorias, pensões, auxílios e demais benefícios previdenciários. Conte com nossa experiência para garantir seus direitos previdenciários de forma ágil e eficiente.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M9DBV4SH" />
      <body className={`${roboto.className} bg-white antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9DBV4SH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <ButtonFloatWttp />
      </body>
    </html>
  )
}

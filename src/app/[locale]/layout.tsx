import { SupportedLocale } from "@/i18n/configuration"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arver World",
  description: "A chill place about creative topics",
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }]
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: SupportedLocale }
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  let translations
  try {
    translations = (
      await import(`../../i18n/translations/${params.locale}.json`)
    ).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={translations}>
          <MantineProvider defaultColorScheme="auto">
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

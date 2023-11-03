"use client"

import { Title } from "@mantine/core"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Home")

  return (
    <main>
      <Title>{t("title")}</Title>
    </main>
  )
}

"use client"

import classes from "@/components/HeroSection/HeroSection.module.css"
import { Button, Container, Stack, Title } from "@mantine/core"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function HeroSection() {
  const t = useTranslations("HeroSection")

  return (
    <Container size="lg" className={classes.container}>
      <Stack justify="center" align="center" gap="xl" className={classes.stack}>
        <Title className={classes.title}>{t("title")}</Title>
        <Button
          component={Link}
          href="/sign-in"
          size="xl"
          radius="xl"
          mt="xl"
          visibleFrom="sm"
        >
          {t("button")}
        </Button>
        <Button
          component={Link}
          href="/sign-in"
          size="lg"
          radius="xl"
          mt="xl"
          hiddenFrom="sm"
        >
          {t("button")}
        </Button>
      </Stack>
    </Container>
  )
}

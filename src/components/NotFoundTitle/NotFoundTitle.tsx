"use client"

import { Button, Container, Group, Stack, Text, Title } from "@mantine/core"
import { useTranslations } from "next-intl"
import Link from "next/link"
import classes from "./NotFoundTitle.module.css"

export default function NotFoundTitle() {
  const t = useTranslations("NotFoundTitle")

  return (
    <Container className={classes.root}>
      <Stack className={classes.stack} align="center" justify="center" gap="xl">
        <Title className={classes.title}>{t("title")}</Title>
        <Text c="dimmed" size="lg" ta="center" className={classes.description}>
          {t("description")}
        </Text>
        <Group justify="center">
          <Button component={Link} href="/" variant="subtle" size="md">
            {t("button")}
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}

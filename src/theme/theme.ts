"use client"

import { createTheme } from "@mantine/core"
import { Signika_Negative } from "next/font/google"

export const signika = Signika_Negative({
  variable: "--font-signika-negative",
  display: "swap",
  subsets: ["latin"],
})

const theme = createTheme({
  fontFamily: signika.style.fontFamily,
  headings: {
    fontFamily: signika.style.fontFamily,
  },
})

export default theme

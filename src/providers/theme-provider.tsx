"use client";

import { ComponentProps } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({
  children,
  ...props
}: Readonly<ComponentProps<typeof NextThemesProvider>>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;

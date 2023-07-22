"use client";

import { ReactNode } from "react";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children?: ReactNode;
}

export default function Providers({ children, ...props }: Props) {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}

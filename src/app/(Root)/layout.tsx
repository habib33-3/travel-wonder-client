import { ReactNode } from "react";

import ThemeProvider from "@/providers/theme-provider";

import Navbar from "@/components/shared/Navbar/Navbar";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <main>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </main>
    </html>
  );
};

export default RootLayout;

import "@/styles/global.css";

import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { DeveloperConsole } from "@/app/developer-console";
import { cn } from "@/lib/styles";

const fontDisplay = localFont({
  src: "./fonts/LibreCaslonCondensed-Medium.woff2",
  variable: "--font-display",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = await getTheme();

  return (
    <html
      className={cn(
        "bg-background font-body text-foreground antialiased",
        GeistSans.variable,
        fontDisplay.variable,
        GeistMono.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <DeveloperConsole />
        <ThemeProvider initialTheme={initialTheme ?? undefined}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "@/app/globals.css";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";
import localFont from "next/font/local";

const fontBody = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-body",
});

const fontDisplay = localFont({
  src: "./fonts/LibreCaslonCondensed-Medium.woff2",
  variable: "--font-display",
});

const fontMono = localFont({
  src: "./fonts/Monaspace Neon Var.woff2",
  variable: "--font-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = await getTheme();

  return (
    <html
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable} bg-background font-body text-foreground antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider initialTheme={initialTheme ?? undefined}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

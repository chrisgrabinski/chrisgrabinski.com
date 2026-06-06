import "@/app/globals.css";
import localFont from "next/font/local";

const fontBody = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-body",
});

const fontDisplay = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-display",
});

const fontMono = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable} bg-background font-body text-foreground antialiased`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}

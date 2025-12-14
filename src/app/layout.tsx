import "@/app/globals.css";
import localFont from "next/font/local";

const fontSans = localFont({
  src: "./fonts/Maison-Regular.woff2",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${fontSans.variable} bg-background font-sans text-foreground antialiased`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}

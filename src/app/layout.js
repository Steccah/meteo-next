import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Stecca meteo",
  description: "Stecca meteo is a simple weather app using openwheather API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

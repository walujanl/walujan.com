import { Footer } from "@/components/Layouts/Footer";
import { Navbar } from "@/components/Layouts/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { AnalyticsScripts } from "@/components/Scripts/Analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <AnimatePresence>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <AnalyticsScripts />
      </AnimatePresence>
    </ThemeProvider>
  );
}

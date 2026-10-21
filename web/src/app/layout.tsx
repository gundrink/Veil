import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@xyflow/react/dist/style.css";
import "./globals.css";
import { AppFrame } from "@/components/layout/AppFrame";
import { APP_DESCRIPTION, APP_LOGO_SRC, APP_NAME } from "@/lib/brand";
import { SolanaProvider } from "@/components/SolanaProvider";

const bodyFont = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const displayFont = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: APP_LOGO_SRC,
    apple: APP_LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-[var(--brand-surface)] font-sans text-[var(--brand-ink)]">
        <SolanaProvider>
          <AppFrame>{children}</AppFrame>
        </SolanaProvider>
      </body>
    </html>
  );
}

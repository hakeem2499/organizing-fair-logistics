import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://organizingfairlogistics.com"),
  title: {
    default: `${SITE.legalName} | Freight Forwarding & Customs Clearing`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.tagline}. ${SITE.description}`,
  keywords: [
    "freight forwarding Nigeria",
    "customs clearing Apapa",
    "Tin Can Island logistics",
    "container coordination Lagos",
    "import export Nigeria",
    "Organizingfair Logistics",
  ],
  openGraph: {
    title: SITE.legalName,
    description: `${SITE.tagline}. ${SITE.description}`,
    type: "website",
    locale: "en_NG",
    siteName: SITE.legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.legalName,
    description: `${SITE.tagline}. ${SITE.description}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FreightForwarder",
    name: SITE.legalName,
    slogan: SITE.tagline,
    description: SITE.description,
    url: "https://organizingfairlogistics.com",
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    logo: "https://organizingfairlogistics.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tin Can Island Port Complex",
      addressLocality: "Apapa",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    areaServed: "NG",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="w-full min-w-0 flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}

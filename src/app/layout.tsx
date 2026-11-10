import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://rafaellylourencopsi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Psicóloga em João Pessoa | Rafaelly Lourenço",
  description:
    "Psicoterapia em João Pessoa para jovens, adultos, crianças, adolescentes e casais com Rafaelly Lourenço, psicóloga clínica (CRP 13/13489).",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: {
      url: "/images/optimized/brand-icon.png?v=2",
      type: "image/png",
      sizes: "128x128",
    },
    shortcut: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "Psicóloga em João Pessoa | Rafaelly Lourenço",
    description:
      "Psicoterapia para jovens, adultos, crianças, adolescentes e casais em João Pessoa.",
    locale: "pt_BR",
    type: "website",
    url: siteUrl,
    siteName: "Rafaelly Lourenço | Psicóloga",
    images: [
      {
        url: "/images/optimized/rafaelly-hero.webp",
        alt: "Psicóloga Rafaelly Lourenço",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga em João Pessoa | Rafaelly Lourenço",
    description:
      "Psicoterapia para jovens, adultos, crianças, adolescentes e casais em João Pessoa.",
    images: ["/images/optimized/rafaelly-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TD28VG6WXD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TD28VG6WXD');
        `}
      </Script>
    </html>
  );
}

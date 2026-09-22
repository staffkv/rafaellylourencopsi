import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafaelly Lourenço | Psicóloga Clínica",
  description:
    "Um espaço de escuta e acolhimento com a psicóloga Rafaelly Lourenço. Conheça seu trabalho com ansiedade, adolescentes e casais e sua abordagem em TCC.",
  icons: {
    icon: {
      url: "/images/optimized/brand-icon.png?v=2",
      type: "image/png",
      sizes: "128x128",
    },
    shortcut: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "Rafaelly Lourenço | Psicóloga Clínica",
    description:
      "Acolher sua história. Compreender o que você sente. Construir novos caminhos.",
    locale: "pt_BR",
    type: "website",
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
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/css/globals.scss";

const manrope = Manrope({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Veagle | Organisation de développement informatique",
  description:
    "Bienvenue sur la page d'accueil de Veagle. Vous trouverez ici toutes les informations nécessaires pour nous contacter et découvrir nos projets informatiques, ainsi que nos services.",
  applicationName: "Veagle",
  authors: [{ name: "Veagle", url: "https://github.com/VeagleDev" }],
  keywords: [
    "development",
    "computer",
    "organisation",
    "tech",
    "programming",
    "web",
  ],
  creator: "Veagle",
  robots: "index, follow",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          defer
          data-domain="veagle.fr"
          src="https://acabou.veagle.fr/js/script.js"
        ></script>
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

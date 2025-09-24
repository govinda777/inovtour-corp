import { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ConsentManager from "@/components/consentManager";  // Novo componente de cliente

// Configurações padrão (substituem o Sanity)
const defaultSettings = {
  title: "INOVTOUR",
  description:
    "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience.",
  url: "https://default-url.com",
  openGraphImage: "/img/opengraph.jpg",

  // Props necessárias para Footer/Navbar
  email: "contato@inovtour.com",
  phone: "+55 (11) 99999-9999",
  social: [
    { media: "facebook", url: "https://facebook.com/inovtour" },
    { media: "instagram", url: "https://instagram.com/inovtour" },
    { media: "linkedin", url: "https://linkedin.com/company/inovtour" },
  ],
  copyright: "© 2025 INOVTOUR. Todos os direitos reservados.",
  logo: { asset: { url: "/img/logo.png" } },
  logoalt: "INOVTOUR LOGO",
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = defaultSettings;

  return {
    metadataBase: new URL(settings.url || "https://inovtour.com"),
    title: {
      default: settings.title || "INOVTOUR",
      template: "%s | Stablo",
    },
    description:
      settings.description ||
      "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience.",
    keywords: ["travel", "tourism", "vacation", "trip"],
    authors: [{ name: "Govinda Systems DAO" }],
    alternates: {
      canonical: settings.url || "https://default-url.com",
    },
    openGraph: {
      images: [
        {
          url: settings.openGraphImage || "/img/opengraph.jpg",
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: settings.title || "INOVTOUR",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = defaultSettings;

  return (
    <html lang="en">
      <head>
        <title>{settings.title || "INOVTOUR"}</title>
        <meta
          name="description"
          content={
            settings.description ||
            "INOVTOUR cooperates with the best travel agencies in the world to provide you with the best travel experience."
          }
        />
      </head>
      <body>
        <div id="__next">
          <Navbar {...settings} />
          {children}
          <Footer {...settings} />

          {/* Componente que gerencia o consentimento e rastreamento */}
          <ConsentManager />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elegance Invites | Premium Digital Wedding Invitations",
  description:
    "Crea invitaciones digitales elegantes para tu boda. Disenos premium, gestion de RSVP, listas de invitados y sitios web coordinados.",
  keywords: [
    "invitaciones digitales",
    "boda",
    "wedding invitations",
    "RSVP",
    "invitaciones de boda",
    "wedding website",
  ],
  openGraph: {
    title: "Elegance Invites | Invitaciones Digitales Premium",
    description:
      "Crea invitaciones digitales elegantes para tu boda con disenos exclusivos y gestion completa de invitados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

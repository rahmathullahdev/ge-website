import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://genexlyf.com'), // Adjust to actual domain
  title: {
    default: "GenexLyf | Best IT Services & Enterprise AI Software Company in Chennai",
    template: "%s | GenexLyf"
  },
  description: "GenexLyf is the premier global IT consulting and digital transformation agency in Chennai, India. Delivering enterprise AI solutions, custom software, and cybersecurity for international markets.",
  applicationName: "GenexLyf",
  authors: [{ name: "GenexLyf Engineering Team" }],
  generator: "Next.js",
  keywords: [
    "Best IT company in Chennai",
    "Top software development agency Chennai",
    "Enterprise AI solutions India",
    "Global digital transformation partners",
    "Chennai tech consultancy international",
    "Custom Web App Development",
    "Cloud & DevOps Solutions",
    "Managed Cybersecurity Services",
    "Artificial Intelligence Consulting",
    "Trusted SaaS providers India",
    "Next Gen tech agency"
  ],
  creator: "GenexLyf",
  publisher: "GenexLyf",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GenexLyf | #1 Rated Global IT & AI Solutions Agency",
    description: "Empowering worldwide enterprises with resilient, secure, AI-first infrastructure and digital product ecosystems. Rated Best IT Agency in Chennai, serving clients globally.",
    url: "https://genexlyf.com",
    siteName: "GenexLyf",
    images: [
      {
        url: "/og-image.jpg", // Ensure user can place an image here later
        width: 1200,
        height: 630,
        alt: "GenexLyf International IT & AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenexLyf | Top Tier IT Services & AI Transformation",
    description: "Trusted global partners for Enterprise AI, Security, & Software Engineering from Chennai to the world.",
    images: ["/og-image.jpg"], // reusing OG
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GenexLyf",
    "alternateName": "GenexLyf IT Services",
    "url": "https://genexlyf.com",
    "logo": "https://genexlyf.com/logo.png",
    "description": "Premier Global IT services and custom software development agency based in Chennai, offering enterprise AI, cloud infrastructure, and full-cycle product development for domestic and international enterprises.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "sameAs": [
      "https://twitter.com/genexlyf",
      "https://linkedin.com/company/genexlyf"
    ],
    "knowsAbout": [
      "Artificial Intelligence Solutions",
      "Enterprise Software Engineering",
      "Cloud Computing Solutions",
      "Cybersecurity Systems",
      "Digital Product Design",
      "SaaS and Web Application Development"
    ],
    "areaServed": ["IN", "US", "GB", "AE", "Global"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

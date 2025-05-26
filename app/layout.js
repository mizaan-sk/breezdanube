import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/Components/Footer";
import Analytics from "@/Components/Analytics";

// Fonts
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GTM_ID = "GTM-P684SB29";

export const metadata = {
  title: "Sobha Central Dubai – New Launch on Sheikh Zayed Road | Sobha Realty",
  description: "Explore Sobha Central, the latest Sobha Dubai launch on Sheikh Zayed Road. Discover luxury residences, premium amenities, and investment opportunities with Sobha Realty.",
    icons: {
    icon: 'favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GTM Script (head) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM NoScript (body) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Site Layout */}
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}

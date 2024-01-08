import "../app/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Kaushan_Script, Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const kaushan = Kaushan_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-kaushan",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sanaa A. | Portfolio ",
  description:
    "Je suis Sanaa A., intégratrice web front-end. Expertise en HTML, CSS, Javascript et React.",
  themeColor: "black",
  
  metadataBase: new URL("https://sahd-portfolio.vercel.app/"),
  openGraph: {
    title: "Sanaa AHDOUR | Portfolio - développeuse web front-end",
    description:
      "Je suis Sanaa A., intégratrice web front-end. Expertise en HTML, CSS, Javascript et React.",
    url: "https://sahd-portfolio.vercel.app/",
    siteName: "Sanaa A., développeuse web",
    locale: "fr_FR",
    type: "website",
  },
  
};



export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="manifest" href="img/favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body
        className={`${kaushan.variable} ${poppins.variable} overflow-x-hidden bg-off-white font-poppins text-gray-global`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

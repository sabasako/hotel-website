import { Inter, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
const notoSansGeorgian = Noto_Sans_Georgian({ subsets: ["georgian", "latin"] });

export const metadata = {
  title: "Hotel",
  description: "Hotel App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${notoSansGeorgian.className} pt-[87px] md:pt-[57px] bg-background-light`}
      >
        <NextTopLoader />

        <main>{children}</main>
      </body>
    </html>
  );
}

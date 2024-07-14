import { Metadata } from "next";
import Header from "@components/Header";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// import localFont from "next/font/local";
// const myFont = localFont({ src: "./Waldorf Astoria.ttf" });

// console.log(myFont)

export const metadata: Metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-50 min-h-screen flex flex-col relative`}
      >
        <NextTopLoader 
          color="#5E82A6"
        />
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

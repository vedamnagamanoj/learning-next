import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
// console.log(josefin);
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_context/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis Client",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950  text-primary-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid w-full">
          <ReservationProvider>
            <main className="max-w-7xl mx-auto">{children}</main>
          </ReservationProvider>
        </div>
      </body>
    </html>
  );
}

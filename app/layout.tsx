import Sidebar from "@/components/sidebar/Sidebar";
import { Figtree } from "next/font/google";
import "./globals.css";

// chakra config
import { Providers } from "./providers";
const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify CLone",
  description: "just listen!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Sidebar>{children}</Sidebar>
        </Providers>
      </body>
    </html>
  );
}

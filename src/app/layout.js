import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Anta } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const anta = Anta({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anta',
  display: 'swap',
});

export const metadata = {
  title: 'SkillSphere - Get Skilled',
  description: 'Connect with high-quality web development and technology courses.',
  icons: {
    icon: '/assets/fav-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${anta.className} bg-[#f8fafc]`}>
        <main>
          <ToastContainer />
          {children}
        </main>
      </body>
    </html>
  );
}

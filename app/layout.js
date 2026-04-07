"use client";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Menulateral from './components/MenuLateral';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const semMenu = ["/login", "/cadastro_usuario", "/"].includes(pathname);

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {semMenu ? (
          children
        ) : (
          <div className="layout">

            {/* MENU LATERAL */}
            <aside className="menulateral">
              <div className="logo">
                <img src="https://placehold.co/50" alt="ImobConnect Logo" />
                <h1 className="fs-5 ImobConnect">ImobConnect</h1>
              </div>
              <Menulateral />
            </aside>

            {/* CONTEÚDO */}
            <main className="conteudo">
              {children}
            </main>

          </div>
        )}

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" />

      </body>
    </html>
  );
}
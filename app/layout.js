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

  // Define rotas que NÃO vão ter menu
  const semMenu = ["/login", "/cadastro_usuario", "/"].includes(pathname);

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {semMenu ? (
          // Layout simples sem menu
          children
        ) : (
          // Layout com menu lateral
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 menulateral" style={{ backgroundColor: "#061247" }}>
                <div className="logo">
                  <img src="https://placehold.co/50" alt="ImobConnect Logo" />
                  <h1 className="fs-5 ImobConnect">ImobConnect</h1>
                </div>
                <Menulateral />
              </div>
              <div className="col-9">{children}</div>
            </div>
          </div>
        )}

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" />

      </body>
    </html>
  );
}
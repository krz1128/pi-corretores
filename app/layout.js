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
          <div className="container-fluid p-0">
            <div className="row m-0 vh-100">

              {/* ── MENU LATERAL ── */}
              <div className="col-2 p-0">
                <aside className="menulateral">

                  <div className="logo text-center py-4">
                    <img src="https://placehold.co/60" alt="Logo" />
                    <h1 className="fs-5 mt-2">ImobConnect</h1>
                  </div>

                  <Menulateral />
                </aside>
              </div>

              {/* ── CONTEÚDO ── */}
              <div className="col-10 p-0">
                <main className="conteudo p-4 bg-light h-100">
                  {children}
                </main>
              </div>

            </div>
          </div>
        )}

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" />

      </body>
    </html>
  );
}
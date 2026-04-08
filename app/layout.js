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
            <div className="row m-0">

              {/* MENU LATERAL */}
              <div className="col-2 p-0">
                <aside
                  className="menulateral d-flex flex-column justify-content-between"
                  style={{
                    height: "100vh",
                    background: "linear-gradient(180deg, #1b4891, #185fa5)",
                    color: "#fff",
                    position: "fixed",
                    width: "16.666%",
                  }}
                >

                  {/* TOPO */}
                  <div>
                    {/* LOGO */}
                    <div className="text-center py-4 border-bottom border-secondary">
                      <img
                        src="/imobConnet.png"
                        alt="Logo"
                        className="mb-2"
                        style={{ width: "120px", objectFit: "contain", borderRadius: "50%"}}
                      />
                      <h1 className="fs-6 fw-semibold m-0">ImobConnect</h1>
                    </div>

                    {/* MENU */}
                    <div className="px-3 py-4">
                      <Menulateral />
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="text-center small pb-3 opacity-75">
                    © 2026
                  </div>

                </aside>
              </div>

              {/* CONTEÚDO */}
              <div
                className="col-10 p-0"
                style={{ marginLeft: "16.666%" }}
              >
                <main className="conteudo p-4 bg-light min-vh-100">
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
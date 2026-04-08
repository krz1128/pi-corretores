import Link from "next/link";
import "./paginaInicial.css";

export default function Home() {
  return (
    <div className="paginaInicial">
      {/* Hero */}
      <section className="hero">

        
        <div className="hero__logo">
          <img
            src="/imobConnect2.png"
            alt="ImobConnect"
            style={{ width: "460px", objectFit: "contain" }}
          />
        </div>

        <p className="hero__subtitle">Gestão imobiliária completa em um só lugar</p>
        <div className="hero__actions">
          <Link href="cadastro_usuario">
            <button className="btn btn--outline">Criar conta</button>
          </Link>
          <Link href="login">
            <button className="btn btn--primary">Entrar</button>
          </Link>
        </div>
      </section>

      {/* Cards de benefícios */}
      <section className="beneficios">
        <div className="card-grid">

          <div className="card-beneficio">
            <div className="card-beneficio__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="card-beneficio__titulo">Conexão de Leads</h3>
            <p className="card-beneficio__texto">
              Conecte corretores a leads de forma rápida e estratégica, facilitando o contato com clientes.
            </p>
          </div>

          <div className="card-beneficio">
            <div className="card-beneficio__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3 className="card-beneficio__titulo">Gestão de Imóveis</h3>
            <p className="card-beneficio__texto">
              Insira e organize imóveis com todas as informações centralizadas em um único lugar.
            </p>
          </div>

          <div className="card-beneficio">
            <div className="card-beneficio__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3 className="card-beneficio__titulo">Mais Produtividade</h3>
            <p className="card-beneficio__texto">
              Otimize o tempo, melhore o acompanhamento dos atendimentos e torne a gestão mais eficiente.
            </p>
          </div>

          <div className="card-beneficio">
            <div className="card-beneficio__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="card-beneficio__titulo">Trabalho Integrado</h3>
            <p className="card-beneficio__texto">
              Imobiliárias e corretores trabalham de forma integrada, com mais controle e visibilidade.
            </p>
          </div>

        </div>
      </section>

      {/* Sobre nós */}
      <section className="sobre">
        <div className="sobre__card">
          <h2 className="sobre__titulo">Conheça mais sobre nós</h2>
          <p className="sobre__texto">
            Nossa plataforma foi desenvolvida especialmente para imobiliárias e corretores que desejam mais
            organização, praticidade e resultados no dia a dia. Simples, prático e feito para gerar resultados.
          </p>
          <Link href="sobre">
            <button className="btn btn--ghost">Saiba mais →</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
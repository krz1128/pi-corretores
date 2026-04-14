import Link from "next/link";
import "./saiba_mais.css";

export default function SaibaMais() {
  return (
    <div className="sm-page">

      {/* NAVBAR */}
      <nav className="sm-nav">
        <img src="/imobConnect2.png" alt="ImobConnect" className="sm-nav__logo" />
        <Link href="/" className="sm-nav__voltar">← Voltar ao início</Link>
      </nav>

      {/* HEADLINE */}
      <section className="sm-headline">
        <div className="sm-headline__inner">
          <span className="sm-headline__tag">Plataforma completa</span>
          <h1 className="sm-headline__titulo">
            Tudo que sua imobiliária <br />
            <span className="sm-headline__destaque">precisa em um só lugar</span>
          </h1>
          <p className="sm-headline__texto">
            O ImobConnect foi criado para eliminar a desorganização do dia a dia imobiliário.
            Gerencie clientes, imóveis, empreendimentos e nunca perca um lead novamente.
          </p>
          <div className="sm-headline__acoes">
            <Link href="/cadastro_usuario">
              <button className="sm-btn sm-btn--primary">Começar agora</button>
            </Link>
            <Link href="/login">
              <button className="sm-btn sm-btn--ghost">Já tenho conta</button>
            </Link>
          </div>
        </div>
        <div className="sm-headline__visual">
          <div className="sm-stat">
            <span className="sm-stat__numero">+30</span>
            <span className="sm-stat__label">dias sem contato? <br/>O sistema avisa.</span>
          </div>
          <div className="sm-stat">
            <span className="sm-stat__numero">4</span>
            <span className="sm-stat__label">módulos integrados <br/>em uma plataforma</span>
          </div>
          <div className="sm-stat">
            <span className="sm-stat__numero">0</span>
            <span className="sm-stat__label">planilhas <br/>necessárias</span>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="sm-modulos">
        <div className="sm-modulos__inner">

          <div className="sm-modulo sm-modulo--esquerda">
            <div className="sm-modulo__icone sm-modulo__icone--azul">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="sm-modulo__conteudo">
              <span className="sm-modulo__numero">01</span>
              <h2 className="sm-modulo__titulo">Clientes</h2>
              <p className="sm-modulo__texto">
                Cadastre todos os seus clientes com nome, contato e histórico de atendimento.
                Nunca mais perca informações importantes de um lead — tudo está registrado e
                acessível em segundos.
              </p>
              <ul className="sm-modulo__lista">
                <li>Cadastro completo com dados de contato</li>
                <li>Histórico de atendimentos</li>
                <li>Busca e filtro rápidos</li>
              </ul>
            </div>
          </div>

          <div className="sm-modulo sm-modulo--direita">
            <div className="sm-modulo__icone sm-modulo__icone--navy">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="sm-modulo__conteudo">
              <span className="sm-modulo__numero">02</span>
              <h2 className="sm-modulo__titulo">Imóveis</h2>
              <p className="sm-modulo__texto">
                Cadastre e organize toda a sua carteira de imóveis. Acompanhe o status de cada
                um — disponível, vendido ou alugado — e tenha uma visão clara do seu portfólio
                a qualquer momento.
              </p>
              <ul className="sm-modulo__lista">
                <li>Status em tempo real</li>
                <li>Informações de localização e valor</li>
                <li>Vinculação com empreendimentos</li>
              </ul>
            </div>
          </div>

          <div className="sm-modulo sm-modulo--esquerda">
            <div className="sm-modulo__icone sm-modulo__icone--claro">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <div className="sm-modulo__conteudo">
              <span className="sm-modulo__numero">03</span>
              <h2 className="sm-modulo__titulo">Empreendimentos</h2>
              <p className="sm-modulo__texto">
                Gerencie lançamentos e empreendimentos completos. Agrupe imóveis por
                empreendimento, acompanhe o andamento das vendas e mantenha sua equipe
                sempre alinhada.
              </p>
              <ul className="sm-modulo__lista">
                <li>Gestão de lançamentos</li>
                <li>Agrupamento de imóveis</li>
                <li>Acompanhamento de vendas</li>
              </ul>
            </div>
          </div>

          <div className="sm-modulo sm-modulo--direita sm-modulo--destaque">
            <div className="sm-modulo__badge">Automático</div>
            <div className="sm-modulo__icone sm-modulo__icone--verde">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className="sm-modulo__conteudo">
              <span className="sm-modulo__numero">04</span>
              <h2 className="sm-modulo__titulo">Lista Diária</h2>
              <p className="sm-modulo__texto">
                Nossa funcionalidade mais poderosa. O sistema monitora automaticamente todos
                os seus clientes e identifica aqueles que estão sem contato há mais de 30 dias.
                Todo dia você recebe uma lista pronta para agir — sem esforço, sem esquecimentos.
              </p>
              <ul className="sm-modulo__lista">
                <li>Detecção automática de clientes inativos</li>
                <li>Lista atualizada todos os dias</li>
                <li>Zero clientes esquecidos</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* PLANOS */}
      <section className="sm-planos">
        <div className="sm-planos__inner">

          <div className="sm-planos__cabecalho">
            <span className="sm-headline__tag">Planos e preços</span>
            <h2 className="sm-planos__titulo">Escolha o plano ideal para sua imobiliária</h2>
            <p className="sm-planos__subtitulo">Sem taxa de adesão. Cancele quando quiser.</p>
          </div>

          <div className="sm-planos__grid">

            {/* BÁSICO */}
            <div className="sm-plano">
              <div className="sm-plano__topo">
                <span className="sm-plano__nome">Básico</span>
                <div className="sm-plano__preco">
                  <span className="sm-plano__cifrao">R$</span>
                  <span className="sm-plano__valor">49</span>
                  <span className="sm-plano__periodo">/mês</span>
                </div>
                <p className="sm-plano__descricao">Ideal para corretores autônomos que querem sair das planilhas.</p>
              </div>
              <ul className="sm-plano__lista">
                <li>1 corretor</li>
                <li>Cadastro de clientes</li>
                <li>Cadastro de imóveis</li>
                <li>Lista diária automática</li>
              </ul>
              <Link href="/cadastro_usuario">
                <button className="sm-plano__btn sm-plano__btn--secundario">Começar agora</button>
              </Link>
            </div>

            {/* PROFISSIONAL */}
            <div className="sm-plano sm-plano--destaque">
              <div className="sm-plano__badge">Mais popular</div>
              <div className="sm-plano__topo">
                <span className="sm-plano__nome">Profissional</span>
                <div className="sm-plano__preco">
                  <span className="sm-plano__cifrao">R$</span>
                  <span className="sm-plano__valor">149</span>
                  <span className="sm-plano__periodo">/mês</span>
                </div>
                <p className="sm-plano__descricao">Para equipes pequenas que precisam de mais organização e controle.</p>
              </div>
              <ul className="sm-plano__lista">
                <li>Até 5 corretores</li>
                <li>Tudo do plano Básico</li>
                <li>Gestão de empreendimentos</li>
                <li>Relatórios de desempenho</li>
                <li>Suporte por e-mail</li>
              </ul>
              <Link href="/cadastro_usuario">
                <button className="sm-plano__btn sm-plano__btn--principal">Escolher plano</button>
              </Link>
            </div>

            {/* EMPRESA */}
            <div className="sm-plano">
              <div className="sm-plano__topo">
                <span className="sm-plano__nome">Empresa</span>
                <div className="sm-plano__preco">
                  <span className="sm-plano__cifrao">R$</span>
                  <span className="sm-plano__valor">299</span>
                  <span className="sm-plano__periodo">/mês</span>
                </div>
                <p className="sm-plano__descricao">Para imobiliárias que precisam de escala sem limite de usuários.</p>
              </div>
              <ul className="sm-plano__lista">
                <li>Usuários ilimitados</li>
                <li>Tudo do plano Profissional</li>
                <li>Personalização do sistema</li>
                <li>Suporte prioritário</li>
                <li>Onboarding dedicado</li>
              </ul>
              <Link href="/cadastro_usuario">
                <button className="sm-plano__btn sm-plano__btn--secundario">Falar com a equipe</button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sm-cta">
        <div className="sm-cta__inner">
          <h2 className="sm-cta__titulo">Pronto para organizar sua imobiliária?</h2>
          <p className="sm-cta__texto">
            Crie sua conta agora e comece a usar todos os módulos gratuitamente.
          </p>
          <Link href="/cadastro_usuario">
            <button className="sm-btn sm-btn--branco">Criar minha conta →</button>
          </Link>
        </div>
      </section>

    </div>
  );
}
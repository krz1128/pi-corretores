import Link from "next/link";
import "./MenuLateral.css";

export default function MenuLateral() {
    return (
        
        <aside className="menulateral">

            <div className="sidebar-top">
                <div className="sidebar-brand">
                    <div className="brand-inner">
                        <div className="brand-icon">D</div>
                        <span className="brand-name">Dashboard</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <span className="nav-label">Principal</span>

                    <Link href="dashboard" className="nav-item active">
                        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
                            <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".5"/>
                            <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".5"/>
                            <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".5"/>
                        </svg>
                        Início
                    </Link>

                    <Link href="lista_diaria" className="nav-item">
                        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="2" width="14" height="2" rx="1" fill="currentColor"/>
                            <rect x="1" y="7" width="10" height="2" rx="1" fill="currentColor"/>
                            <rect x="1" y="12" width="12" height="2" rx="1" fill="currentColor"/>
                        </svg>
                        Lista diária
                    </Link>

                    <div className="sidebar-divider"></div>
                    <span className="nav-label">Cadastros</span>

                    <Link href="corretores" className="nav-item">
                        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="5" r="3" fill="currentColor"/>
                            <path d="M2 13c0-2.761 2.686-5 6-5s6 2.239 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                        </svg>
                        Corretores
                    </Link>

                    <Link href="clientes" className="nav-item">
                        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
                            <circle cx="5.5" cy="5" r="2.5" fill="currentColor"/>
                            <circle cx="10.5" cy="5" r="2.5" fill="currentColor" opacity=".5"/>
                            <path d="M1 13c0-2.209 2.015-4 4.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                            <path d="M7 13c0-2.209 2.015-4 4.5-4s4.5 1.791 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".5"/>
                        </svg>
                        Clientes
                    </Link>

                    <Link href="cadastro_empreendimento" className="nav-item">
                        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
                            <path d="M8 1L2 5v9h4V9h4v5h4V5L8 1z" fill="currentColor"/>
                        </svg>
                        Empreendimentos
                    </Link>

                    <Link href="imoveis" className="nav-item">
                        <svg className="nav-icon" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                            <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        Imóveis
                    </Link>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <div className="btn-group dropend profile-area">
                    <button type="button" className="profile-trigger" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="profile-avatar">JD</div>
                        <div className="profile-info">
                            <span className="profile-name">João Dimas</span>
                            <span className="profile-role">Administrador</span>
                        </div>
                        <span className="profile-dots">···</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">Editar perfil</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item text-danger" href="#">Sair</a></li>
                    </ul>
                </div>
            </div>

        </aside>
    );
}
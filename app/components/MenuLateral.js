'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./MenuLateral.css";

export default function MenuLateral() {
    const router = useRouter();

    function sair() {
        router.push("/");
    }

    return (
        <div>
            <div className="botaoinicio list-group list-group-flush fs-4">
                <Link href="dashboard" className="list-group-item list-group-item-action botaoinicio" aria-current="true">Início</Link>
                <Link href="lista_diaria" className="list-group-item list-group-item-action">Lista diária</Link>
                <Link href="corretores" className="list-group-item list-group-item-action active">Corretores</Link>
                <Link href="clientes" className="list-group-item list-group-item-action">Clientes</Link>
                <Link href="cadastro_empreendimento" className="list-group-item list-group-item-action">Empreendimentos</Link>
                <Link href="imoveis" className="list-group-item list-group-item-action">Imóveis</Link>
            </div>

            <div className="text-center menuLateralPerfil" style={{ padding: "20px 12px" }}>
                <div className="btn-group dropend">
                    <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.12)",
                            color: "#ffffff",
                            border: "1px solid rgba(255,255,255,0.25)",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            fontWeight: 500,
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "background 0.18s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.22)"}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        Perfil
                    </button>

                    <ul className="dropdown-menu dropdown-menu-dark" style={{
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        backgroundColor: "#0c3464",
                        minWidth: "140px",
                        padding: "6px",
                    }}>
                        <li>
                            <button
                                onClick={sair}
                                className="dropdown-item"
                                style={{
                                    borderRadius: "6px",
                                    color: "#ffaaaa",
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "8px 12px",
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                    <polyline points="16 17 21 12 16 7"/>
                                    <line x1="21" y1="12" x2="9" y2="12"/>
                                </svg>
                                Sair
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
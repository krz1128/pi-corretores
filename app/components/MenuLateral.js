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

            <div className="text-center menuPerfil" style={{ padding: "20px 12px" }}>

                <span style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12px",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "10px"
                }}>
                   
                </span>

                <button
                    onClick={sair}
                    className="btn"
                    style={{
                        backgroundColor: "#e05555",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "9px 16px",
                        cursor: "pointer",
                        transition: "background 0.18s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#c43e3e"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#e05555"}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Sair
                </button>

            </div>
        </div>
    )
}
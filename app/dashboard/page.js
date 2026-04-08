"use client"
import { useEffect, useState } from "react";
import "./painel_adm.css";
import supabase from "../conexao/supabase";

export default function Dashboard() {

    const [clientes, alteraClientes] = useState(0);
    const [empreendimentos, alteraEmpreendimentos] = useState(0);
    const [imoveis, alteraImoveis] = useState(0);
    const [vendidos, alteraVendidos] = useState(0);
    const [alugados, alteraAlugados] = useState(0);
    const [desligados, alteraDesligados] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const { count: totalClientes } = await supabase
                .from("clientes")
                .select("*", { count: "exact", head: true });

            const { count: totalEmpreendimentos } = await supabase
                .from("empreendimentos")
                .select("*", { count: "exact", head: true });

            const { count: totalImoveis } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true });

            const { count: totalVendidos } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true })
                .eq("status", "vendido");

            const { count: totalAlugados } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true })
                .eq("status", "alugado");

            const { count: totalDesligados } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true })
                .eq("status", "desligado");

            alteraClientes(totalClientes || 0);
            alteraEmpreendimentos(totalEmpreendimentos || 0);
            alteraImoveis(totalImoveis || 0);
            alteraVendidos(totalVendidos || 0);
            alteraAlugados(totalAlugados || 0);
            alteraDesligados(totalDesligados || 0);
        }

        fetchData();
    }, []);

    return (
        <div className="dashboard">

            <div className="dashboard__header">
                <h1 className="dashboard__titulo">Painel de controle</h1>
                <p className="dashboard__subtitulo">Visão geral da sua operação</p>
            </div>

            <div className="dashboard__secao">
                <p className="dashboard__secao-label">Geral</p>
                <div className="dashboard__grid">

                    <div className="cartao2">
                        <div className="cartao2__icone cartao2__icone--azul">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                        </div>
                        <p className="cartao2__label">Total de clientes</p>
                        <p className="cartao2__valor">{clientes}</p>
                    </div>

                    <div className="cartao2">
                        <div className="cartao2__icone cartao2__icone--navy">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                            </svg>
                        </div>
                        <p className="cartao2__label">Total de empreendimentos</p>
                        <p className="cartao2__valor">{empreendimentos}</p>
                    </div>

                    <div className="cartao2">
                        <div className="cartao2__icone cartao2__icone--claro">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                        </div>
                        <p className="cartao2__label">Total de imóveis</p>
                        <p className="cartao2__valor">{imoveis}</p>
                    </div>

                </div>
            </div>

            <div className="dashboard__secao">
                <p className="dashboard__secao-label">Status dos imóveis</p>
                <div className="dashboard__grid">

                    <div className="cartao2 cartao2--vendido">
                        <div className="cartao2__icone cartao2__icone--verde">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                        </div>
                        <p className="cartao2__label">Imóveis vendidos</p>
                        <p className="cartao2__valor">{vendidos}</p>
                    </div>

                    <div className="cartao2 cartao2--alugado">
                        <div className="cartao2__icone cartao2__icone--amarelo">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                            </svg>
                        </div>
                        <p className="cartao2__label">Imóveis alugados</p>
                        <p className="cartao2__valor">{alugados}</p>
                    </div>

                    <div className="cartao2 cartao2--desligado">
                        <div className="cartao2__icone cartao2__icone--cinza">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                            </svg>
                        </div>
                        <p className="cartao2__label">Imóveis desligados</p>
                        <p className="cartao2__valor">{desligados}</p>
                    </div>

                </div>
            </div>

        </div>
    );
}
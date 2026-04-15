'use client'
import { useEffect, useState } from "react"
import supabase from "../conexao/supabase"
import "./lista_diaria.css"

// Clientes fictícios apenas para visualização do layout
const CLIENTES_DEMO = [
    {
        id: "demo-1",
        nome: "Carlos Mendes",
        telefone: "(11) 99432-1987",
        email: "carlos.mendes@email.com",
        observacao: "Interessado em apartamentos no centro, até R$ 450k",
        ultimo_contato: new Date(Date.now() - 65 * 864e5).toISOString()
    },
    {
        id: "demo-2",
        nome: "Fernanda Lima",
        telefone: "(21) 98765-4321",
        email: "fernanda.lima@gmail.com",
        observacao: "Quer imóvel próximo a escola para os filhos",
        ultimo_contato: new Date(Date.now() - 47 * 864e5).toISOString()
    },
    {
        id: "demo-3",
        nome: "Roberto Alves",
        telefone: "(31) 97654-3210",
        email: "roberto.alves@empresa.com.br",
        observacao: null,
        ultimo_contato: new Date(Date.now() - 33 * 864e5).toISOString()
    },
    {
        id: "demo-4",
        nome: "Juliana Costa",
        telefone: "(41) 96543-2109",
        email: "ju.costa@hotmail.com",
        observacao: "Prefere casa com quintal, bairro tranquilo",
        ultimo_contato: new Date(Date.now() - 72 * 864e5).toISOString()
    },
    {
        id: "demo-5",
        nome: "Paulo Souza",
        telefone: "(51) 95432-1098",
        email: "paulo.souza@outlook.com",
        observacao: "Contato somente após as 18h",
        ultimo_contato: new Date(Date.now() - 38 * 864e5).toISOString()
    },
]

export default function ListaClientes() {

    const [listaClientes, alteraListaClientes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [modalAberto, setModalAberto] = useState(false)
    const [clienteSelecionado, setClienteSelecionado] = useState(null)

    async function buscaClientes() {
        setCarregando(true)

        let dataPesquisa = new Date()
        dataPesquisa.setDate(dataPesquisa.getDate() - 30)
        dataPesquisa = dataPesquisa.toISOString()
        dataPesquisa = dataPesquisa.split("T")[0]

        const { data, error } = await supabase
            .from('clientes')
            .select()
            .gt('ultimo_contato', '1950-01-01 00:00:00')
            .lte('ultimo_contato', dataPesquisa + ' 23:59:59')

        alteraListaClientes(data || [])
        setCarregando(false)
    }

    async function concluirCliente(id) {
        let dataHoje = new Date()
        dataHoje = dataHoje.toISOString().replace("T", " ")

        const { error } = await supabase
            .from('clientes')
            .update({ ultimo_contato: dataHoje })
            .eq("id", id)

        setModalAberto(false)
        setClienteSelecionado(null)
        buscaClientes()
    }

    function abrirModal(cliente) {
        setClienteSelecionado(cliente)
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false)
        setClienteSelecionado(null)
    }

    function diasSemContato(data) {
        const contato = new Date(data)
        const hoje = new Date()
        const diffMs = hoje - contato
        return Math.floor(diffMs / (1000 * 60 * 60 * 24))
    }

    function nivelUrgencia(dias) {
        if (dias >= 60) return "urgente"
        if (dias >= 45) return "atencao"
        return "normal"
    }

    function labelUrgencia(dias) {
        if (dias >= 60) return "🔴 Urgente"
        if (dias >= 45) return "🟡 Atenção"
        return "🔵 Pendente"
    }

    function formatarData(data) {
        if (!data) return "—"
        const d = new Date(data)
        return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
    }

    function linkWhatsApp(telefone) {
        const numero = telefone?.replace(/\D/g, "")
        return `https://wa.me/55${numero}`
    }

    function linkEmail(email) {
        return `mailto:${email}?subject=Olá, tudo bem?&body=Olá! Gostaríamos de retomar o contato e saber se posso ajudá-lo(a).`
    }

    useEffect(() => {
        buscaClientes()
    }, [])

    return (
        <div>
            {/* HEADER */}
            <div className="ld-header">
                <div className="ld-header-info">
                    <h1>📋 Lista Diária de Contatos</h1>
                    <p>Clientes há mais de 30 dias sem contato — entre em ação hoje!</p>
                </div>
                {!carregando && (
                    <span className="ld-badge-total">
                        {listaClientes.length + CLIENTES_DEMO.length} cliente{(listaClientes.length + CLIENTES_DEMO.length) !== 1 ? "s" : ""} pendente{(listaClientes.length + CLIENTES_DEMO.length) !== 1 ? "s" : ""}
                    </span>
                )}
            </div>

            {/* GRID */}
            <div className="ld-grid">

                {/* LOADING SKELETON */}
                {carregando && [1, 2, 3].map(i => (
                    <div key={i} className="ld-card" style={{ minHeight: 240 }}>
                        <div className="ld-card-urgency normal">
                            <div className="ld-skeleton" style={{ width: 80, height: 14 }} />
                            <div className="ld-urgency-dot" />
                        </div>
                        <div className="ld-card-body">
                            <div className="ld-cliente-info">
                                <div className="ld-skeleton" style={{ width: 52, height: 52, borderRadius: "50%" }} />
                                <div style={{ flex: 1 }}>
                                    <div className="ld-skeleton" style={{ width: "60%", height: 16, marginBottom: 8 }} />
                                    <div className="ld-skeleton" style={{ width: "40%", height: 12 }} />
                                </div>
                            </div>
                            <div className="ld-skeleton" style={{ width: "100%", height: 36, marginBottom: 8, borderRadius: 8 }} />
                            <div className="ld-skeleton" style={{ width: "100%", height: 36, borderRadius: 8 }} />
                        </div>
                    </div>
                ))}

                {/* SEM CLIENTES REAIS E SEM DEMO: ESTADO VAZIO */}
                {!carregando && listaClientes.length === 0 && CLIENTES_DEMO.length === 0 && (
                    <div className="ld-empty">
                        <span className="ld-empty-icon">🎉</span>
                        <h2>Tudo em dia!</h2>
                        <p>Nenhum cliente com mais de 30 dias sem contato. Continue assim!</p>
                    </div>
                )}

                {/* CARTÕES DE CLIENTES (reais + demo) */}
                {!carregando && [...listaClientes, ...CLIENTES_DEMO].map(item => {
                    const dias = diasSemContato(item.ultimo_contato)
                    const nivel = nivelUrgencia(dias)

                    return (
                        <div key={item.id} className="ld-card">

                            {/* TOPO: URGÊNCIA */}
                            <div className={`ld-card-urgency ${nivel}`}>
                                <span>{labelUrgencia(dias)} — <strong>{dias} dias</strong> sem contato</span>
                                <span className="ld-urgency-dot" />
                            </div>

                            {/* CORPO */}
                            <div className="ld-card-body">

                                {/* AVATAR + NOME */}
                                <div className="ld-cliente-info">
                                    <img
                                        className="ld-avatar"
                                        src={`https://api.dicebear.com/9.x/initials/svg?seed=${item.nome}&backgroundType=gradientLinear`}
                                        alt={item.nome}
                                    />
                                    <div>
                                        <p className="ld-nome">{item.nome}</p>
                                        <p className="ld-ultimo-contato">
                                            Último contato: {formatarData(item.ultimo_contato)}
                                        </p>
                                    </div>
                                </div>

                                {/* CAMPOS DE CONTATO */}
                                <div className="ld-contato-campos">
                                    <div className="ld-campo">
                                        <i className="bi bi-telephone-fill" />
                                        <span>{item.telefone || "Sem telefone"}</span>
                                    </div>
                                    <div className="ld-campo">
                                        <i className="bi bi-envelope-fill" />
                                        <span>{item.email || "Sem e-mail"}</span>
                                    </div>
                                </div>

                                {/* OBSERVAÇÃO */}
                                {item.observacao && (
                                    <div className="ld-obs">
                                        <i className="bi bi-sticky-fill" />
                                        <span>{item.observacao}</span>
                                    </div>
                                )}
                            </div>

                            {/* RODAPÉ: AÇÕES */}
                            <div className="ld-card-footer">
                                <a
                                    href={linkWhatsApp(item.telefone)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ld-btn ld-btn-whatsapp"
                                >
                                    <i className="bi bi-whatsapp" /> WhatsApp
                                </a>
                                <a
                                    href={linkEmail(item.email)}
                                    className="ld-btn ld-btn-email"
                                >
                                    <i className="bi bi-envelope" /> E-mail
                                </a>
                                <button
                                    onClick={() => abrirModal(item)}
                                    className="ld-btn ld-btn-concluir"
                                >
                                    <i className="bi bi-check-lg" /> Concluir
                                </button>
                            </div>

                        </div>
                    )
                })}
            </div>

            {/* MODAL DE CONFIRMAÇÃO */}
            {modalAberto && clienteSelecionado && (
                <div className="ld-modal-overlay" onClick={fecharModal}>
                    <div className="ld-modal" onClick={e => e.stopPropagation()}>
                        <span className="ld-modal-icon">✅</span>
                        <h2>Confirmar atendimento</h2>
                        <p>
                            Deseja marcar o contato com{" "}
                            <span className="ld-modal-nome">{clienteSelecionado.nome}</span>{" "}
                            como realizado hoje?
                        </p>
                        <div className="ld-modal-actions">
                            <button onClick={fecharModal} className="ld-btn ld-btn-cancelar">
                                Cancelar
                            </button>
                            <button
                                onClick={() => concluirCliente(clienteSelecionado.id)}
                                className="ld-btn ld-btn-concluir"
                            >
                                <i className="bi bi-check-lg" /> Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
'use client'
import "./cadastro_empreendimento.css"
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')

export default function CadastroEmpreendimento() {

    const [construtora, alteraConstrutora] = useState("")
    const [tipoimovel, alteraTipoimovel] = useState("")
    const [valor, alteraValor] = useState("")
    const [pagamento, alteraPagamento] = useState("")
    const [prazo, alteraPrazo] = useState("")
    const [unidades, alteraUnidades] = useState("")
    const [condominio, alteraCondominio] = useState("")

    const [idEditando, alteraIdEditando] = useState("")
    const [construtoraEdit, alteraConstrutoraEdit] = useState("")
    const [tipoimovelEdit, alteraTipoimovelEdit] = useState("")
    const [valorEdit, alteraValorEdit] = useState("")
    const [pagamentoEdit, alteraPagamentoEdit] = useState("")
    const [prazoEdit, alteraPrazoEdit] = useState("")
    const [unidadesEdit, alteraUnidadesEdit] = useState("")
    const [condominioEdit, alteraCondominioEdit] = useState("")

    const [empreendimentos, alteraCadastroEmpreendimento] = useState([]);

    async function buscar() {
        const { data } = await supabase.from('empreendimentos').select()
        alteraCadastroEmpreendimento(data)
    }

    async function salvar() {
        const objeto = {
            construtora, tipo_imovel: tipoimovel, valor_empreendimento: valor,
            forma_pagamento: pagamento, prazo_entrega: prazo,
            unidades_disponiveis: unidades, condominio
        }
        const { error } = await supabase.from('empreendimentos').insert(objeto)
        if (error == null) {
            alert("Empreendimento cadastrado com sucesso")
            alteraConstrutora(""); alteraTipoimovel(""); alteraValor("")
            alteraPagamento(""); alteraPrazo(""); alteraUnidades(""); alteraCondominio("")
            location.reload()
        } else {
            alert("Dados inválidos, verifique os campos e tente novamente.")
        }
    }

    function abrirEdicao(item) {
        alteraIdEditando(item.id)
        alteraConstrutoraEdit(item.construtora)
        alteraTipoimovelEdit(item.tipo_imovel)
        alteraValorEdit(item.valor_empreendimento)
        alteraPagamentoEdit(item.forma_pagamento)
        alteraPrazoEdit(item.prazo_entrega)
        alteraUnidadesEdit(item.unidades_disponiveis)
        alteraCondominioEdit(item.condominio)
    }

    async function editar() {
        const objeto = {
            construtora: construtoraEdit, tipo_imovel: tipoimovelEdit,
            valor_empreendimento: valorEdit, forma_pagamento: pagamentoEdit,
            prazo_entrega: prazoEdit, unidades_disponiveis: unidadesEdit,
            condominio: condominioEdit
        }
        const { error } = await supabase.from('empreendimentos').update(objeto).eq('id', idEditando)
        if (error == null) { alert("Empreendimento atualizado com sucesso"); location.reload() }
        else { alert("Dados inválidos, verifique os campos e tente novamente.") }
    }

    async function acoes(id) {
        if (!confirm("Tem certeza que deseja excluir o item?")) return
        await supabase.from('empreendimentos').delete().eq('id', id)
        location.reload()
    }

    useEffect(() => { buscar() }, [])

    return (
        <div className="page-wrapper">

            {/* ── Cabeçalho da página ── */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">Empreendimentos</h1>
                    <p className="page-subtitle">Gerencie todos os empreendimentos cadastrados</p>
                </div>
                <button
                    type="button"
                    className="btn-new"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    <svg viewBox="0 0 16 16" fill="none" className="btn-icon">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Novo empreendimento
                </button>
            </div>

            {/* ── Modal: Cadastro ── */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-dark">
                        <div className="modal-header modal-header-dark">
                            <h5 className="modal-title" id="exampleModalLabel">Novo empreendimento</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body modal-body-dark">
                            <form className="form-dark">
                                {[
                                    { label: "Construtora", fn: alteraConstrutora, type: "text" },
                                    { label: "Tipo de imóvel", fn: alteraTipoimovel, type: "text" },
                                    { label: "Valor", fn: alteraValor, type: "text" },
                                    { label: "Forma de pagamento", fn: alteraPagamento, type: "text" },
                                    { label: "Prazo de entrega", fn: alteraPrazo, type: "text" },
                                    { label: "Unidades disponíveis", fn: alteraUnidades, type: "text" },
                                ].map(({ label, fn, type }) => (
                                    <div className="form-group" key={label}>
                                        <label className="form-label-dark">{label}</label>
                                        <input onChange={e => fn(e.target.value)} type={type} className="form-input-dark" />
                                    </div>
                                ))}
                                <div className="form-group">
                                    <label className="form-label-dark">Condomínio</label>
                                    <textarea onChange={e => alteraCondominio(e.target.value)} className="form-input-dark form-textarea-dark" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer modal-footer-dark">
                            <button type="button" className="btn-cancel" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={salvar} type="button" className="btn-confirm">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Modal: Edição ── */}
            <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="modalEdicaoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-dark">
                        <div className="modal-header modal-header-dark">
                            <h5 className="modal-title" id="modalEdicaoLabel">Editar empreendimento</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body modal-body-dark">
                            <form className="form-dark">
                                {[
                                    { label: "Construtora", val: construtoraEdit, fn: alteraConstrutoraEdit },
                                    { label: "Tipo de imóvel", val: tipoimovelEdit, fn: alteraTipoimovelEdit },
                                    { label: "Valor", val: valorEdit, fn: alteraValorEdit },
                                    { label: "Forma de pagamento", val: pagamentoEdit, fn: alteraPagamentoEdit },
                                    { label: "Prazo de entrega", val: prazoEdit, fn: alteraPrazoEdit },
                                    { label: "Unidades disponíveis", val: unidadesEdit, fn: alteraUnidadesEdit },
                                ].map(({ label, val, fn }) => (
                                    <div className="form-group" key={label}>
                                        <label className="form-label-dark">{label}</label>
                                        <input onChange={e => fn(e.target.value)} value={val} type="text" className="form-input-dark" />
                                    </div>
                                ))}
                                <div className="form-group">
                                    <label className="form-label-dark">Condomínio</label>
                                    <textarea onChange={e => alteraCondominioEdit(e.target.value)} value={condominioEdit} className="form-input-dark form-textarea-dark" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer modal-footer-dark">
                            <button type="button" className="btn-cancel" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={editar} type="button" className="btn-confirm">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Tabela ── */}
            <p className="section-label">Lista de empreendimentos</p>
            <div className="table-card">
                <table className="tabelaEmpreendimentos">
                    <thead>
                        <tr>
                            <td>Construtora</td>
                            <td>Tipo de imóvel</td>
                            <td>Valor</td>
                            <td>Pagamento</td>
                            <td>Prazo</td>
                            <td>Unidades</td>
                            <td>Condomínio</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {empreendimentos.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.construtora}</th>
                                <td>{item.tipo_imovel}</td>
                                <td>{item.valor_empreendimento}</td>
                                <td>{item.forma_pagamento}</td>
                                <td>{item.prazo_entrega}</td>
                                <td>{item.unidades_disponiveis}</td>
                                <td>{item.condominio}</td>
                                <td className="acoes-cell">
                                    <button
                                        className="btn-table-edit"
                                        onClick={() => abrirEdicao(item)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalEdicao"
                                    >
                                        Editar
                                    </button>
                                    <button className="btn-table-del" onClick={() => acoes(item.id)}>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
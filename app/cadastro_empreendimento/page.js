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

    // Erros do modal de cadastro
    const [erros, alteraErros] = useState({})

    // Erros do modal de edição
    const [errosEdit, alteraErrosEdit] = useState({})

    async function buscar() {
        const { data } = await supabase.from('empreendimentos').select()
        alteraCadastroEmpreendimento(data)
    }

    function formatarValor(valor) {
        let numero = valor.replace(/\D/g, '') // tira tudo que não é número
        if (numero === '') return ''
        numero = parseInt(numero)
        return 'R$' + numero.toLocaleString('pt-BR')
    }

    function validarCampos(campos) {
        let errosEncontrados = {}

        if (campos.construtora === "") errosEncontrados.construtora = "O nome da construtora não pode estar vazio."
        if (campos.tipoimovel === "") errosEncontrados.tipoimovel = "Informe o tipo do imóvel."
        if (campos.valor === "") errosEncontrados.valor = "Informe o valor do empreendimento."
        if (campos.pagamento === "") errosEncontrados.pagamento = "Informe a forma de pagamento."
        if (campos.prazo === "") errosEncontrados.prazo = "Informe o prazo de entrega."
        if (campos.unidades === "") errosEncontrados.unidades = "Informe a quantidade de unidades disponíveis."
        if (isNaN(campos.unidades) && campos.unidades !== "") errosEncontrados.unidades = "Unidades disponíveis deve ser um número."
        if (campos.condominio === "") errosEncontrados.condominio = "Informe as informações do condomínio."

        return errosEncontrados
    }

    async function salvar() {
        const errosEncontrados = validarCampos({
            construtora, tipoimovel, valor, pagamento, prazo, unidades, condominio
        })

        if (Object.keys(errosEncontrados).length > 0) {
            alteraErrosEdit(errosEncontrados)
            alert("Corrija os seguintes campos:\n\n" + Object.values(errosEncontrados).join("\n"))
            return
        }

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
            alteraErros({})
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
        alteraErrosEdit({})
    }

    async function editar() {
        const errosEncontrados = validarCampos({
            construtora: construtoraEdit, tipoimovel: tipoimovelEdit,
            valor: valorEdit, pagamento: pagamentoEdit,
            prazo: prazoEdit, unidades: unidadesEdit, condominio: condominioEdit
        })

        if (Object.keys(errosEncontrados).length > 0) {
            alteraErrosEdit(errosEncontrados)
            alert("Corrija os seguintes campos:\n\n" + Object.values(errosEncontrados).join("\n"))
            return
        }

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
                    onClick={() => alteraErros({})}
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
                            <div className="form-dark">

                                <div className="form-group">
                                    <label className="form-label-dark">Construtora</label>
                                    <input onChange={e => { alteraConstrutora(e.target.value); alteraErros({ ...erros, construtora: "" }) }} type="text" className="form-input-dark" />
                                    {erros.construtora && <span className="erro-campo">{erros.construtora}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Tipo de imóvel</label>
                                    <input onChange={e => { alteraTipoimovel(e.target.value); alteraErros({ ...erros, tipoimovel: "" }) }} type="text" className="form-input-dark" />
                                    {erros.tipoimovel && <span className="erro-campo">{erros.tipoimovel}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Valor</label>
                                    <input
                                        onChange={e => { alteraValor(formatarValor(e.target.value)); alteraErros({ ...erros, valor: "" }) }}
                                        value={valor}
                                        type="text"
                                        className="form-input-dark"
                                        placeholder="Ex: R$450.000"
                                    />
                                    {erros.valor && <span className="erro-campo">{erros.valor}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Forma de pagamento</label>
                                    <input onChange={e => { alteraPagamento(e.target.value); alteraErros({ ...erros, pagamento: "" }) }} type="text" className="form-input-dark" />
                                    {erros.pagamento && <span className="erro-campo">{erros.pagamento}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Prazo de entrega</label>
                                    <input onChange={e => { alteraPrazo(e.target.value); alteraErros({ ...erros, prazo: "" }) }} type="text" className="form-input-dark" />
                                    {erros.prazo && <span className="erro-campo">{erros.prazo}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Unidades disponíveis</label>
                                    <input onChange={e => { alteraUnidades(e.target.value); alteraErros({ ...erros, unidades: "" }) }} type="text" className="form-input-dark" />
                                    {erros.unidades && <span className="erro-campo">{erros.unidades}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Condomínio</label>
                                    <textarea onChange={e => { alteraCondominio(e.target.value); alteraErros({ ...erros, condominio: "" }) }} className="form-input-dark form-textarea-dark" />
                                    {erros.condominio && <span className="erro-campo">{erros.condominio}</span>}
                                </div>

                            </div>
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
                            <div className="form-dark">

                                <div className="form-group">
                                    <label className="form-label-dark">Construtora</label>
                                    <input onChange={e => { alteraConstrutoraEdit(e.target.value); alteraErrosEdit({ ...errosEdit, construtora: "" }) }} value={construtoraEdit} type="text" className="form-input-dark" />
                                    {errosEdit.construtora && <span className="erro-campo">{errosEdit.construtora}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Tipo de imóvel</label>
                                    <input onChange={e => { alteraTipoimovelEdit(e.target.value); alteraErrosEdit({ ...errosEdit, tipoimovel: "" }) }} value={tipoimovelEdit} type="text" className="form-input-dark" />
                                    {errosEdit.tipoimovel && <span className="erro-campo">{errosEdit.tipoimovel}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Valor</label>
                                    <input
                                        onChange={e => { alteraValorEdit(formatarValor(e.target.value)); alteraErrosEdit({ ...errosEdit, valor: "" }) }}
                                        value={valorEdit}
                                        type="text"
                                        className="form-input-dark"
                                        placeholder="Ex: R$450.000"
                                    />
                                    {errosEdit.valor && <span className="erro-campo">{errosEdit.valor}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Forma de pagamento</label>
                                    <input onChange={e => { alteraPagamentoEdit(e.target.value); alteraErrosEdit({ ...errosEdit, pagamento: "" }) }} value={pagamentoEdit} type="text" className="form-input-dark" />
                                    {errosEdit.pagamento && <span className="erro-campo">{errosEdit.pagamento}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Prazo de entrega</label>
                                    <input onChange={e => { alteraPrazoEdit(e.target.value); alteraErrosEdit({ ...errosEdit, prazo: "" }) }} value={prazoEdit} type="text" className="form-input-dark" />
                                    {errosEdit.prazo && <span className="erro-campo">{errosEdit.prazo}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Unidades disponíveis</label>
                                    <input onChange={e => { alteraUnidadesEdit(e.target.value); alteraErrosEdit({ ...errosEdit, unidades: "" }) }} value={unidadesEdit} type="text" className="form-input-dark" />
                                    {errosEdit.unidades && <span className="erro-campo">{errosEdit.unidades}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label-dark">Condomínio</label>
                                    <textarea onChange={e => { alteraCondominioEdit(e.target.value); alteraErrosEdit({ ...errosEdit, condominio: "" }) }} value={condominioEdit} className="form-input-dark form-textarea-dark" />
                                    {errosEdit.condominio && <span className="erro-campo">{errosEdit.condominio}</span>}
                                </div>

                            </div>
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
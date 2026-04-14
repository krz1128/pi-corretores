'use client'
import { useEffect, useState } from "react";
import "./imoveis.css"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://ogybpinvvqkfjvotqzcf.supabase.co',
    'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg'
)

function Imoveis() {

    const [nome, alteraNome] = useState("")
    const [endereco, alteraEndereco] = useState("")
    const [valor, alteraValor] = useState("")
    const [foto, alteraFoto] = useState("")

    const [editandoId, setEditandoId] = useState(null)

    const [filtroStatus, alteraFiltroStatus] = useState("")
    const [listaImoveis, alteraListaImoveis] = useState([])

    async function buscar() {
        const { data, error } = await supabase.from('imoveis').select()

        if (error) {
            console.log(error)
            alteraListaImoveis([])
        } else {
            alteraListaImoveis(data || [])
        }
    }

    async function salvar() {
        const objeto = { nome, endereco, valor, foto }

        const { error } = await supabase.from('imoveis').insert(objeto)

        if (!error) {
            alert("Imóvel cadastrado com sucesso!")
            limparCampos()
            buscar()

            //  FECHAR MODAL AUTOMATICAMENTE
            const modal = document.getElementById('modalCadastro')
            const modalInstance = window.bootstrap.Modal.getInstance(modal)
            modalInstance.hide()
        }
    }

    function abrirEdicao(item) {
        setEditandoId(item.id)
        alteraNome(item.nome)
        alteraEndereco(item.endereco)
        alteraValor(item.valor)
        alteraFoto(item.foto)
    }

    function limparCampos() {
        alteraNome("")
        alteraEndereco("")
        alteraValor("")
        alteraFoto("")
        setEditandoId(null)
    }

    async function salvarEdicao() {
        const { error } = await supabase
            .from('imoveis')
            .update({ nome, endereco, valor, foto })
            .eq('id', editandoId)

        if (!error) {
            const listaAtualizada = listaImoveis.map(item =>
                item.id === editandoId
                    ? { ...item, nome, endereco, valor, foto }
                    : item
            )

            alteraListaImoveis(listaAtualizada)
            alert("Atualizado com sucesso!")
            limparCampos()
        }
    }

    async function atualizar(id, novoStatus) {

        if (novoStatus === "desligado") {
            alteraListaImoveis(listaImoveis.filter(item => item.id !== id))
        } else {
            const listaAtualizada = listaImoveis.map(item =>
                item.id === id ? { ...item, status: novoStatus } : item
            )

            const itemAtualizado = listaAtualizada.find(item => item.id === id)
            const resto = listaAtualizada.filter(item => item.id !== id)

            alteraListaImoveis([itemAtualizado, ...resto])
        }

        await supabase.from('imoveis')
            .update({ status: novoStatus })
            .eq('id', id)
    }

    useEffect(() => {
        buscar()
    }, [])

    function corStatus(status) {
        if (status === "vendido") return "bg-success"
        if (status === "alugado") return "bg-warning text-dark"
        if (status === "desligado") return "bg-danger"
        return "bg-secondary"
    }

    return (

        <div className="col-10 fs-6">

            <h3 className="mb-3">Página de Imóveis</h3>

            <button className="btn btn-primary btn-sm mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalCadastro">
                + Adicionar Imóvel
            </button>

            {/* FILTRO */}
            <div className="mb-4 w-25 ms-auto">
                <label className="form-label fw-semibold small">Filtrar por status</label>
                <select
                    className="form-select form-select-sm shadow-sm border-primary"
                    onChange={(e) => alteraFiltroStatus(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="vendido">Vendido</option>
                    <option value="alugado">Alugado</option>
                </select>
            </div>

            {/* MODAL CADASTRO */}
            <div className="modal fade" id="modalCadastro">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Novo Imóvel</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control mb-2" placeholder="Nome" />
                            <textarea value={endereco} onChange={e => alteraEndereco(e.target.value)} className="form-control mb-2" placeholder="Endereço" />

                            <div className="input-group mb-2">
                                <span className="input-group-text">R$</span>
                                <input
                                    type="number"
                                    value={valor}
                                    onChange={e => alteraValor(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <input value={foto} onChange={e => alteraFoto(e.target.value)} className="form-control mb-2" placeholder="Imagem URL" />
                        </div>

                        <div className="modal-footer">
                            <button onClick={salvar} className="btn btn-primary">Salvar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* MODAL EDIÇÃO */}
            <div className="modal fade" id="modalEdicao">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Editar Imóvel</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <input value={nome} onChange={e => alteraNome(e.target.value)} className="form-control mb-2" />
                            <textarea value={endereco} onChange={e => alteraEndereco(e.target.value)} className="form-control mb-2" />

                            <div className="input-group mb-2">
                                <span className="input-group-text">R$</span>
                                <input
                                    type="number"
                                    value={valor}
                                    onChange={e => alteraValor(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <input value={foto} onChange={e => alteraFoto(e.target.value)} className="form-control mb-2" />
                        </div>

                        <div className="modal-footer">
                            <button onClick={salvarEdicao} className="btn btn-primary" data-bs-dismiss="modal">
                                Salvar Alterações
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* CARDS */}
            <div className="row row-cols-1 row-cols-md-3 g-3">

                {(listaImoveis || [])
                    .filter(item => item.status !== "desligado")
                    .filter(item => filtroStatus === "" || item.status === filtroStatus)
                    .map(item => (

                        <div className="col" key={item.id}>
                            <div className="card h-100 shadow-sm position-relative">

                                {item.status && (
                                    <span className={`badge ${corStatus(item.status)} position-absolute top-0 start-0 m-2`}>
                                        {item.status}
                                    </span>
                                )}

                                <img className="card-img-top" src={item.foto} />

                                <div className="card-body p-2">
                                    <h6 className="card-title">{item.nome}</h6>
                                    <p className="card-text small"><strong>Endereço:</strong> {item.endereco}</p>
                                    <p className="card-text small"><strong>Valor:</strong> R$ {item.valor}</p>

                                    <button
                                        className="btn btn-secondary btn-sm mt-2 w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalEdicao"
                                        onClick={() => abrirEdicao(item)}
                                    >
                                        Editar
                                    </button>
                                </div>

                                <div className="p-2">
                                    <select
                                        value={item.status || ""}
                                        onChange={(e) => atualizar(item.id, e.target.value)}
                                        className="form-select form-select-sm"
                                    >
                                        <option value="">Selecione o status</option>
                                        <option value="vendido">Vendido</option>
                                        <option value="alugado">Alugado</option>
                                        <option value="desligado">Desligado</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Imoveis
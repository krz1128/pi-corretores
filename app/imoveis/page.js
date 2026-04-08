'use client'
import { useEffect, useState } from "react";
import "./imoveis.css"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')

function Imoveis() {

    const [nome, alteraNome] = useState("")
    const [endereco, alteraEndereco] = useState("")
    const [valor, alteraValor] = useState("")
    const [status, alteraStatus] = useState("")
    const [editando, alteraEditando] = useState(null)
    const [foto, alteraFoto] = useState("")

    const [filtroStatus, alteraFiltroStatus] = useState("")
    const [listaImoveis, alteraListaImoveis] = useState([]);

    async function buscar() {
        const { data } = await supabase.from('imoveis').select()
        alteraListaImoveis(data)
    }

    async function salvar() {
        const objeto = { nome, endereco, valor, foto }

        const { error } = await supabase.from('imoveis').insert(objeto)

        if (!error) {
            alert("Imóvel cadastrado com sucesso!")
            alteraNome("")
            alteraEndereco("")
            alteraValor("")
            alteraFoto("")
            buscar()
        } else {
            alert("Erro ao cadastrar")
        }
    }

    async function atualizar(id, novoStatus) {
        const { error } = await supabase
            .from('imoveis')
            .update({ status: novoStatus })
            .eq('id', id)

        if (!error) {
            alert("Atualizado com sucesso!")
            buscar()
        }
    }

    useEffect(() => {
        buscar()
    }, [])

    return (

        <div className="col-10 fs-6"> {/* 👈 DIMINUI FONTE GLOBAL */}

            <h3 className="mb-3">Página de Imóveis</h3> {/* 👈 menor */}

            <button className="btn btn-primary btn-sm mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
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
                    <option value="desligado">Desligado</option>
                </select>
            </div>

            {/* MODAL */}
            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Novo Imóvel</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form>

                                <div className="mb-2">
                                    <label className="small">Nome:</label>
                                    <input value={nome} type="text" className="form-control form-control-sm"
                                        onChange={e => alteraNome(e.target.value)} />
                                </div>

                                <div className="mb-2">
                                    <label className="small">Endereço:</label>
                                    <textarea value={endereco} className="form-control form-control-sm"
                                        onChange={e => alteraEndereco(e.target.value)} />
                                </div>

                                <div className="mb-2">
                                    <label className="small">Valor:</label>
                                    <input value={valor} className="form-control form-control-sm"
                                        onChange={e => alteraValor(e.target.value)} />
                                </div>

                                <div className="mb-2">
                                    <label className="small">Imagem:</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={foto}
                                        onChange={e => alteraFoto(e.target.value)}
                                    />
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button onClick={salvar} className="btn btn-primary btn-sm">Salvar</button>
                            <button className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* CARDS */}
            <div className="row row-cols-1 row-cols-md-3 g-3">

                {listaImoveis
                    .filter(item => filtroStatus === "" || item.status === filtroStatus)
                    .map(item => (

                        <div className="col" key={item.id}>
                            <div className="card h-100 shadow-sm">

                                <img
                                    className="card-img-top"
                                    src={item.foto}
                                    alt="Imagem do imóvel"
                                    style={{ height: "180px", objectFit: "cover" }}
                                />

                                <div className="card-body p-2">
                                    <h6 className="card-title mb-1">{item.nome}</h6> {/* 👈 menor */}

                                    <p className="card-text small mb-1">
                                        <strong>Endereço:</strong> {item.endereco}
                                    </p>

                                    <p className="card-text small">
                                        <strong>Valor:</strong> R$ {item.valor}
                                    </p>
                                </div>

                                <div className="p-2">
                                    <select
                                        onChange={(e) => atualizar(item.id, e.target.value)}
                                        className="form-select form-select-sm"
                                    >
                                        <option value="">...</option>
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
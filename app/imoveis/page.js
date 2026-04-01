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


    async function buscaUsuario() {
        const { data, error } = await supabase
            .from("usuarios")
            .select()
            .eq("id", id_usuario)

        alteraUsuario(data[0])

    }


    function editar(objeto) {

        alteraEditando(objeto.id)

        alteraStatus(objeto.status)

    }

    async function buscar() {
        const { data, error } = await supabase
            .from('imoveis')
            .select()
        console.log(data)
        alteraListaImoveis(data)
    }


    async function salvar(e) {

        const objeto = {
            nome: nome,
            endereco: endereco,
            valor: valor,
            foto: foto
        }

        const { error } = await supabase.from('imoveis').insert(objeto)
        console.log(error)

        if (error == null) {
            alert("Imóvel cadastrado com sucesso!")
            alteraNome("")
            alteraEndereco("")
            alteraValor("")
            alteraFoto("")

            buscar()
        } else {
            alert("Dados inválidos, verifique os campos e tente novamente...")
        }

    }

    function cancelaEdicao() {
        alteraEditando(null)
        alteraStatus("")
    }

    async function atualizar(id, novoStatus) {

        const { error } = await supabase
            .from('imoveis')
            .update({ status: novoStatus })
            .eq('id', id)

        if (error == null) {
            alert("Atualizado com sucesso!")
            buscar()
        } else {
            alert("Erro ao atualizar")
        }
    }


    useEffect(() => {
        buscar()
    }, [])



    return (
        <div>

            <div class="titulo"></div>
            <h1>Página de Imóveis </h1>

            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+ Adicionar Imóvel</button>


            {/* BARRA DE PESQUISA */}

            <div class="mb-4 w-25 ms-auto">
                <label class="form-label fw-bold">Filtrar por status</label>

                <select
                    class="form-select shadow-sm border-primary"
                    onChange={(e) => alteraFiltroStatus(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="vendido">Vendido</option>
                    <option value="alugado">Alugado</option>
                    <option value="desligado">Desligado</option>
                </select>
            </div>

            {/* div modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title fs-5" id="exampleModalLabel">Novo Corretor</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label class="col-form-label">Nome:</label>
                                    <input value={(nome)} type="text" class="form-control" onChange={e => alteraNome(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"> Endereço: </label>
                                    <textarea value={(endereco)} class="form-control" onChange={e => alteraEndereco(e.target.value)}></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"> Valor: </label>
                                    <textarea value={(valor)} class="form-control" onChange={e => alteraValor(e.target.value)}></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"> URL da Imagem: </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={foto}
                                        onChange={e => alteraFoto(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button onClick={salvar} class="btn btn-primary">Salvar</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    listaImoveis
                        .filter((item) => {
                            if (filtroStatus === "") return true
                            return item.status === filtroStatus
                        })
                        .map((item, index) => (

                            <div class="col" key={item.id}>
                                <div class="card h-100">

                                    <img
                                        className="card-img-top"
                                        src={item.foto}
                                        alt="Imagem do imóvel"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />

                                    <div class="card-body">
                                        <h5 class="card-title">{item.nome}</h5>
                                        <p class="card-text">
                                            <strong>Endereço:</strong> {item.endereco} <br />
                                            <strong>Valor:</strong> R$ {item.valor}
                                        </p>
                                    </div>

                                    <div class="btn-group" role="group">
                                        <select onChange={(e) => atualizar(item.id, e.target.value)} class="form-select">
                                            <option value="">...</option>
                                            <option value="vendido">Vendido</option>
                                            <option value="alugado">Alugado</option>
                                            <option value="desligado">Desligado</option>
                                        </select>
                                    </div>

                                    <div></div>

                                </div>
                            </div>
                        ))
                }

            </div >

        </div >
    )
}

export default Imoveis
'use client'
import { useEffect, useState } from "react"
import supabase from "../conexao/supabase"

export default function ListaClientes() {

    const [listaClientes, alteraListaClientes] = useState([])

    async function buscaClientes() {

        let dataPesquisa = new Date();
        dataPesquisa.setDate(dataPesquisa.getDate() - 30)
        dataPesquisa = dataPesquisa.toISOString()
        dataPesquisa = dataPesquisa.split("T")[0]

        const { data, error } = await supabase
            .from('clientes')
            .select()
            .gt('ultimo_contato', '1950-01-01 00:00:00')
            .lte('ultimo_contato', dataPesquisa + ' 23:59:59')

        alteraListaClientes(data)

    }

    async function concluirCliente(id) {

        let dataHoje = new Date()
        dataHoje = dataHoje.toISOString()
        dataHoje = dataHoje.replace("T", " ")
        const obj = {
            ultimo_contato: dataHoje
        }

        const { error } = await supabase
            .from('clientes')
            .update(obj)
            .eq("id", id)

        alert("Atendimento realizdo com sucesso!")
        buscaClientes()

    }

    function diasSemContato(data) {
        let contato = new Date(data)
        let hoje = new Date()

        const diffMs = hoje - contato
        const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24))

        return diffDias

    }

    useEffect(() => {
        buscaClientes()
    }, [])

    return (
        <div>
            <h1>Lista diária</h1>
            <p>Clientes a mais de 30 dias sem contato</p>


            <div class="row row-cols-2 row-cols-md-3 g-4">

                {
                    listaClientes.map(
                        item =>
                            <div class="col">
                                <div class="card text-center mx-3" style={{ maxWidth: 400 }}>
                                    <div class="card-header">
                                        <i class="bi bi-clock"></i> <strong>{diasSemContato(item.ultimo_contato)}</strong> Dias sem contato
                                    </div>
                                    <div class="card-body my-3">
                                        <h5 class="card-title">
                                            {/* <img width={35} src={"https://ui-avatars.com/api/?name="+item.nome+"&background=random&rounded=true"} className="me-3" /> */}
                                            <img width={35} src={"https://api.dicebear.com/9.x/initials/svg?seed=$" + item.nome + "&backgroundType=gradientLinear"} className="me-3 rounded-circle" />
                                            <strong>{item.nome}</strong>
                                        </h5>
                                        <br />

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><i class="bi bi-telephone"></i> {item.telefone} </li>
                                            <li class="list-group-item"><i class="bi bi-envelope"></i> {item.email}</li>
                                        </ul>

                                        <p class="card-text text-secondary"><small> <i class="bi bi-eye"></i> <strong>{item.observacao}</strong></small></p>

                                    </div>
                                    <div class="card-footer text-body-secondary">
                                        <button onClick={() => concluirCliente(item.id)} class="btn btn-primary"><i class="bi bi-check-lg"></i> Concluir</button>
                                    </div>
                                </div>
                            </div>
                    )
                }

            </div>


        </div>
    )
}
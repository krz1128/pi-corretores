'use client'
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import "./corretores.css"

const supabase = createClient(
    'https://ogybpinvvqkfjvotqzcf.supabase.co',
    'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg'
)

export default function Corretores() {

    const [verModal, alteraVerModal] = useState(false)
    const [lista, alteraLista] = useState([])

    const [nome, alteraNome] = useState("")
    const [telefone, alteraTelefone] = useState("")
    const [cpf, alteraCpf] = useState("")

    const [editandoId, alteraEditandoId] = useState(null)
    const [usuario, alteraUsuario] = useState(null)

    async function buscar() {
        const { data } = await supabase
            .from('usuarios')
            .select()
        alteraLista(data)
    }

    useEffect(() => {
        buscar()
    }, [])



    async function salvar() {

         if (!user) {
        alert("Faça login para continuar")
        return
    }

        if (!nome || !cpf) {
            alert("Preencha todos os campos")
            return
        }

        const obj = { nome, cpf }

        if (editandoId) {
            await supabase
                .from('usuarios')
                .update(obj)
                .eq('id', editandoId)

            alert("Atualizado")
        } else {
            await supabase
                .from('usuarios')
                .insert(obj)

            alert("Cadastrado")
        }

        alteraNome("")
        alteraCpf("")
        alteraEditandoId(null)
        alteraVerModal(false)

        buscar()
    }

    async function excluir(id) {
        if (!confirm("Deseja excluir?")) return

        await supabase
            .from('usuarios')
            .delete()
            .eq('id', id)

        buscar()
    }

    function editar(item) {
        alteraNome(item.nome)
        alteraCpf(item.cpf)
        alteraEditandoId(item.id)
        alteraVerModal(true)
    }

    return (
        <div className="card p-4 mt-3">

            <h3>Corretores</h3>
            <p>Seja bem vindo(a)!</p>

            {
                usuario != null && usuario.admin == true ?
                    <button>Cadastrar novo funcionários</button>
                    :
                    <div></div>
            }

            <button
                onClick={() => {
                    alteraNome("")
                    alteraCpf("")
                    alteraTelefone("")
                    alteraEditandoId(null)
                    alteraVerModal(true)
                }}
            >
                Adicionar Corretor
            </button>



            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.telefone}</td>
                            <td>
                                <button onClick={() => editar(item)}>
                                    Editar
                                </button>
                                {" "}
                                <button onClick={() => excluir(item.id)}>
                                    🗑
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {verModal && (
                <>
                    <div
                        className="modal d-block"
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5>{editandoId ? "Editar Corretor" : "Novo Corretor"}</h5>
                                    <button onClick={() => alteraVerModal(false)}>X</button>
                                </div>

                                <div className="modal-body">
                                    <input
                                        placeholder="Nome"
                                        value={nome}
                                        onChange={e => alteraNome(e.target.value)}
                                        className="form-control mb-2"
                                    />

                                    <input
                                        placeholder="Telefone:"
                                        value={telefone}
                                        onChange={e => alteraTelefone(e.target.value)}
                                        className="form-control mb-2"
                                    />

                                    <input
                                        placeholder="CPF"
                                        value={cpf}
                                        onChange={e => alteraCpf(e.target.value)}
                                        className="form-control mb-2"
                                    />
                                </div>

                                <div className="modal-footer">
                                    <button onClick={() => alteraVerModal(false)}>Cancelar</button>
                                    <button onClick={salvar}>Salvar</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="modal-backdrop show"></div>
                </>
            )}

        </div>
    )
}

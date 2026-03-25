// 'use client'
// import Link from "next/link"
// import "./corretores.css"
// import { useEffect, useState } from "react";

// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')


// function Corretores() {

//     const [nome, alteraNome] = useState("")
//     const [email, alteraEmail] = useState("")
//     const [senha, alteraSenha] = useState("")

//     const [editando, alteraEditando] = useState(null)

//     async function buscar() {
//         const { data, error } = await supabase.from('usuarios').select()

//         console.log(data)
//         alteraListaCorretores(data)
//     }


//     const [listaCorretores, alteraListaCorretores] = useState([]);



//     async function salvar(e) {

//         const objeto = {
//             nome: nome,
//             email: email,
//             senha: senha
//         }


//         if (objeto.email.length < 3) {
//             alert("Usuário muito curto")
//             return
//         }

//         if (objeto.email.length > 100) {
//             alert("Usuário muito longo")
//             return
//         }

//         if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
//             alert("O e-mail deve ter um @ ou um .")
//             return
//         }



//         const { error } = await supabase.from('usuarios').insert(objeto)
//         console.log(error)

//         if (error == null) {
//             alert("Usuário cadastrado com sucesso!")
//             alteraNome("")
//             alteraEmail("")
//             alteraSenha("")

//         } else {
//             alert("Dados inválidos, verifique os campos e tente novamente...")
//         }

//     }

//         async function buscaTodos() {

//         const { data, error } = await supabase
//             .from('usuarios')
//             .select(`
//                 *,
//                 nome (*),
//                 email (*)
//                 senha (*)
//             `)
//             .order('id', { ascending: false })

//         console.log(data)

//         alteraListaCorretores(data)

//     }


//     async function excluir(id) {
//         const opçao = confirm("Tem certeza que deseja excluir?")
//         if (opçao == false)
//             return

//         const { error } = await supabase
//             .from('usuarios')
//             .delete()
//             .eq('id', id)

//         if (error) {
//             console.log(error)
//             alert("Erro ao excluir!")
//         } else {
//             alert("Excluído com sucesso!")
//         }


//     }


//     function editar(objeto) {

//         alteraEditando(objeto.id)

//         alteraNome(objeto.nome)
//         alteraEmail(objeto.email)
//         alteraSenha(objeto.senha)

//     }


//     function cancelaEdicao() {

//         alteraEditando(null)

//         alteraNome("")
//         alteraEmail("")
//         alteraSenha("")
//     }



//     useEffect(() => {
//         buscar()
//     }, [])



//     return (
//         // div principal
//         <div>


//             <div class="titulo"></div>
//             <h1>Página de Corretores (Raianny) </h1>


//             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar Corretor</button>

//             {/* div modal */}
//             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h2 class="modal-title fs-5" id="exampleModalLabel">Novo Corretor</h2>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                             <form>
//                                 <div class="mb-3">
//                                     <label for="recipient-name" class="col-form-label">Nome:</label>
//                                     <input value={(nome)} type="text" class="form-control" id="recipient-name" onChange={e => alteraNome(e.target.value)} />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="e-mail" class="col-form-label">e-mail: </label>
//                                     <textarea value={(email)} class="form-control" id="message-text" onChange={e => alteraEmail(e.target.value)}></textarea>
//                                 </div>
//                                 <div class="mb-3">
//                                     <label class="col-form-label">Senha: </label>
//                                     <textarea value={(senha)} class="form-control" id="message-text" onChange={e => alteraSenha(e.target.value)}></textarea>
//                                 </div>
//                             </form>
//                         </div>
//                         <div class="modal-footer">
//                             <button onClick={salvar} class="btn btn-primary">Salvar</button>
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

//                         </div>

//                     </div>
//                 </div>

            
//             </div>
//             <div>

//                 {/* tabela informações corretores */}
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Nome</th>
//                             <th scope="col">E-mail</th>
//                             <th scope="col">Telefone</th>
//                             <th scope="col">Ações</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {
//                             listaCorretores.map(

//                                 item => <tr>
//                                     <th scope="row">{item.nome}</th>
//                                     <td>{item.email}</td>
//                                     <td>{item.telefone}</td>
//                                     <td> <button onClick={ ()=> editar(item.id) } >Editar</button> <button onClick={ ()=> excluir(item.id) } >🗑</button> </td>
                                    
//                                 </tr>
//                             )
//                         }

//                     </tbody>
//                 </table>
//                 <div class="modal" tabindex="-1">
//                     <div class="modal-dialog">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title">Modal title</h5>
//                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div class="modal-body">
//                                 <p>Modal body text goes here.</p>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 <button type="button" class="btn btn-primary">Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Corretores


'use client'
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://ogybpinvvqkfjvotqzcf.supabase.co',
    'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg'
)

export default function Corretores() {

    const [verModal, alteraVerModal] = useState(false)
    const [lista, alteraLista] = useState([])

    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")
    const [editandoId, alteraEditandoId] = useState(null)

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

        if (!nome || !email || !senha) {
            alert("Preencha todos os campos")
            return
        }

        const obj = { nome, email, senha }

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
        alteraEmail("")
        alteraSenha("")
        alteraEditandoId(false)
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
        alteraEmail(item.email)
        alteraSenha(item.senha)
        alteraEditandoId(item.id)
        alteraVerModal(true)
    }

    return (
        <div className="card p-4 mt-3">

            <h3>Corretores</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.senha}</td>
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

            <button
                onClick={() => {
                    alteraNome("")
                    alteraEmail("")
                    alteraSenha("")
                    alteraEditandoId(null)
                    alteraVerModal(true)
                }}
            >
                Adicionar Corretor
            </button>

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
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => alteraEmail(e.target.value)}
                                        className="form-control mb-2"
                                    />
                                    <input
                                        placeholder="Senha"
                                        value={senha}
                                        onChange={e => alteraSenha(e.target.value)}
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

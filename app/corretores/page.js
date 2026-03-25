'use client'
import Link from "next/link"
import "./corretores.css"
import { useEffect, useState } from "react";

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')


function Corretores() {

    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")

    const [editando, alteraEditando] = useState(null)

    async function buscar() {
        const { data, error } = await supabase.from('usuarios').select()

        console.log(data)
        alteraListaCorretores(data)
    }


    const [listaCorretores, alteraListaCorretores] = useState([]);



    async function salvar(e) {

        const objeto = {
            nome: nome,
            email: email,
            senha: senha
        }


        if (objeto.email.length < 3) {
            alert("Usuário muito curto")
            return
        }

        if (objeto.email.length > 100) {
            alert("Usuário muito longo")
            return
        }

        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
            alert("O e-mail deve ter um @ ou um .")
            return
        }



        const { error } = await supabase.from('usuarios').insert(objeto)
        console.log(error)

        if (error == null) {
            alert("Usuário cadastrado com sucesso!")
            alteraNome("")
            alteraEmail("")
            alteraSenha("")

        } else {
            alert("Dados inválidos, verifique os campos e tente novamente...")
        }

    }

        async function buscaTodos() {

        const { data, error } = await supabase
            .from('usuarios')
            .select(`
                *,
                nome (*),
                email (*)
                senha (*)
            `)
            .order('id', { ascending: false })

        console.log(data)

        alteraListaCorretores(data)

    }


    async function excluir(id) {
        const opçao = confirm("Tem certeza que deseja excluir?")
        if (opçao == false)
            return

        const { error } = await supabase
            .from('usuarios')
            .delete()
            .eq('id', id)

        if (error) {
            console.log(error)
            alert("Erro ao excluir!")
        } else {
            alert("Excluído com sucesso!")
        }


    }

    async function atualizar(){

        const obj = {
            nome: nome,
            email: email,
            senha: senha
        }

        const { error } = await supabase
            .from('usuarios')
            .update(obj)
            .eq('id', editando)

        if(error == null){
            alert("Atualização realizada com sucesso!")
            cancelaEdicao()
            buscar()
        }else{
            alert("Dados inválidos! Verifique os campos e tente novamente...")
        }

    }

    function editar(objeto) {

        alteraEditando(objeto.id)

        alteraNome(objeto.nome)
        alteraEmail(objeto.email)
        alteraSenha(objeto.senha)

    }


    function cancelaEdicao() {

        alteraEditando(null)

        alteraNome("")
        alteraEmail("")
        alteraSenha("")
    }



    useEffect(() => {
        buscar()
    }, [])



    return (
        // div principal
        <div>


            <div class="titulo"></div>
            <h1>Página de Corretores (Raianny) </h1>


            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar Corretor</button>

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
                                    <label for="recipient-name" class="col-form-label">Nome:</label>
                                    <input value={(nome)} type="text" class="form-control" id="recipient-name" onChange={e => alteraNome(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="e-mail" class="col-form-label">e-mail: </label>
                                    <textarea value={(email)} class="form-control" id="message-text" onChange={e => alteraEmail(e.target.value)}></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label">Senha: </label>
                                    <textarea value={(senha)} class="form-control" id="message-text" onChange={e => alteraSenha(e.target.value)}></textarea>
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
            <div>

                {/* tabela informações corretores */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            listaCorretores.map(

                                item => <tr>
                                    <th scope="row">{item.nome}</th>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td> <button onClick={ ()=> editar(item.id) } >Editar</button> </td>
                                    <td> <button onClick={ ()=> excluir(item.id) } >🗑</button> </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Corretores
'use client'
import Link from "next/link"
import "./cadastro_usuario.css"
import { useEffect, useState } from "react"
import { createClient } from '@supabase/supabase-js'
const supabase = createClient( 'https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')



export default function CadastroUsuario() {


    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [telefone, alteraTelefone] = useState("")
    const [senha, alteraSenha] = useState("")


    // Função para salvar
    async function salvar(e) {
        e.preventDefault()
        const objeto = {
            nome: nome,
            email: email,
            senha: senha
        }

        const { error } = await supabase
            .from('usuarios')
            .insert(objeto)
        console.log(error)

        if (error == null) {
            alert("Usuário cadastrado com sucesso!")
            alteraNome("")
            alteraEmail("")
            alteraTelefone("")
            alteraSenha("")
        }
        else {
            alert("Dados inválidos, verifique os campos e tente novamente.")
        }

    }

    return (

        <div>
            <div class="menuSuperior">

                <div>

                    <div class="menuLateral">

                        <div class="text-center mt-5">
                            <h1 class="fs-1"> <strong>Cadastre-se</strong> </h1>
                        </div>


                        <form onsubmit={salvar}>



                            <label>
                                Nome completo:
                                <br />
                                <input value={(nome)} onChange={e => alteraNome(e.target.value)}required class="inputNome" />
                            </label>

                            <br /><br />

                            <label>
                                Email:
                                <br />
                                <input value={(email)}  onChange={e => alteraEmail(e.target.value)}required class="inputEmail" />
                            </label>


                            <br /><br />

                             <label>
                                Telefone:
                                <br />
                                <input value={(telefone)}  onChange={e => alteraTelefone(e.target.value)}required class="inputTelefone" />
                            </label>

                            <br/> <br/>

                            <label>
                                Crie sua senha:
                                <br />
                                <input value={(senha)} onChange={e => alteraSenha(e.target.value)} required class="inputSenha" type="password" />
                            </label>


                            <br /><br />


                            <button onClick={salvar} type="salvar"> Criar Login</button>



                        </form>
                    </div>

                    <hr />


                </div>

            </div>

    
        </div>


    )

}
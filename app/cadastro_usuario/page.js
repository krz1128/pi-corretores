'use client'
import supabase from "../conexao/supabase"
import "./cadastro_usuario.css"
import { useState } from "react"



export default function cadastroUsuario() {

    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [telefone, alteraTelefone] = useState("")
    const [cpf, alteraCPF] = useState("")
    const [senha, alteraSenha] = useState("")


    // Função para salvar
    async function salvar(e) {
        e.preventDefault()

        if (!nome || !email || !senha) {
            alert("Preencha todos os campos")
            return
        }

        //CADASTRAR NO AUTHENTICATION DO SUPABASE
        console.log("aaaaaaaaaa")
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: senha
        })
        console.log(error)
        if (data == null) {
            alert("Dados inválidos...")
            return
        }


        const objeto = {
            id: data.user.id,
            nome: nome,
            cpf: cpf,
            telefone: telefone
        }

        const resposta = await supabase
            .from('usuarios')
            .insert(objeto)

        

        if (resposta.error == null) {
            alert("Usuário cadastrado com sucesso!")
            alteraNome("")
            alteraEmail("")
            alteraTelefone("")
            alteraCPF("")
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


                        <form onSubmit={salvar}>



                            <label>
                                Nome completo:
                                <br />
                                <input value={(nome)} onChange={e => alteraNome(e.target.value)} required class="inputNome" />
                            </label>

                            <br /><br />

                            <label>
                                Email:
                                <br />
                                <input value={(email)} onChange={e => alteraEmail(e.target.value)} required class="inputEmail" />
                            </label>


                            <br /><br />

                            <label>
                                Telefone:
                                <br />
                                <input value={(telefone)} onChange={e => alteraTelefone(e.target.value)} required class="inputTelefone" />
                            </label>

                            <br /><br />
                            <label>
                                CPF:
                                <br />
                                <input value={(cpf)} onChange={e => alteraCPF(e.target.value)} required class="inputTelefone" />
                            </label>

                            <br /> <br />

                            <label>
                                Crie sua senha:
                                <br />
                                <input value={(senha)} onChange={e => alteraSenha(e.target.value)} required class="inputSenha" type="password" />
                            </label>


                            <br /><br />


                            <button> Cadastre - se</button>

                           


                        </form>
                    </div>

                    <hr />


                </div>

            </div>


        </div>


    )

}
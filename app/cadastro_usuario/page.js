'use client'
import Link from "next/link"
import "./cadastro_usuario.css"
import { createClient, FunctionRegion } from '@supabase/supabase-js'
import { useEffect, useState } from "react"
const supabase = createClient('https://ksrbtutpfybyalxyijxd.supabase.co', 'sb_publishable_teTpea3gZLy8U1iDzWuR4Q_z4Mu_9Aa')


export default function CadastroUsuario() {


    const [nome, alteraNome] = useState("")
    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")

     const [cadastroUsuario, alteraCadastroUsuario] = useState([]);

    // função para buscar a informação do banco de dados 
    async function buscar() {
        const { data, error } = await supabase
            .from('usuarios')
            .select()
        console.log(data)
        alteraCadastroUsuario(data)
    }


    // Função para salvar
    async function salvar(e) {

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
            alteraSenha("")
        }
        else {
            alert("Dados inválidos, verifique os campos e tente novamente.")
        }

    }

    //usEffect é chamado apenas ao iniciar a página, uma vez
    useEffect(() => {
        buscar()
    }, [])


    return (

        <div>
            <div class="menuSuperior">

                <div>

                    <div class="menuLateral">

                        <div class="text-center mt-5">
                            <h1 class="fs-1"> <strong>Cadastre-se</strong> </h1>
                        </div>


                        <form onsubmit="salvar(event)">



                            <label>
                                Nome completo:
                                <br />
                                <input onChange={e => alteraNome(e.target.value)}required class="inputNome" />
                            </label>

                            <br /><br />

                            <label>
                                Email:
                                <br />
                                <input  onChange={e => alteraEmail(e.target.value)}required class="inputEmail" />
                            </label>


                            <br /><br />

                            <label>
                                Crie sua senha:
                                <br />
                                <input onChange={e => alteraSenha(e.target.value)} required class="inputSenha" type="password" />
                            </label>


                            <br /><br />


                            <Link href="login">  <button onClick={salvar} type="salvar"> Criar Login</button> </Link>



                        </form>
                    </div>

                    <hr />


                </div>

            </div>

    
        </div>


    )

}
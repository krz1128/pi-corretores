'use client'
import "./login.css"
import Link from "next/link"
import { createClient, FunctionRegion } from '@supabase/supabase-js'
import { useEffect, useState } from "react"
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')


 export default function Login() {

     const [nome, alteraNome] = useState("")
    const [senha, alteraSenha] = useState("")

    // função para buscar a informação do banco de dados 
    async function buscar() {
        const { data, error } = await supabase.from('usuarios').select()

        console.log(data)
        alteraLivros(data)
    }
    

    // Função para salvar
    async function salvar(e) {

        const objeto = {
            nome: nome,
            preco: senha
        }

        const { error } = await supabase.from('usuarios').insert(objeto)
        console.log(error)

        if (error == null) {
            alert("Livro cadastrado com sucesso!")
            alteraNome("")
            alteraSenha("")
        } else {
            alert("Dados inválidos, verifique os campos e tente novamente...")
        }
    }

    //usEffect é chamado apenas ao iniciar a página, uma vez
    useEffect(() => {
        buscar()
    }, [])


    return (
        <div>
            <div class="loginCadastro"> Faça o Login</div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>

            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"/>

            </div>
            
             <Link href="dashboard">  <button type="button" class="btn btn-primary btn-sm">Entrar</button> </Link>


        </div>
       
    )
}
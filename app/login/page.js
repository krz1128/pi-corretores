'use client'
import supabase from "../conexao/supabase"
import "./login.css"
import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";




export default function Login() {

    const [nome, alteraNome] = useState("")
    const [senha, alteraSenha] = useState("")
    const router = useRouter();
    const { login, alteraLogin } = useState([])


    async function autenticar() {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: nome,
            password: senha,
        })


        if (data.user == null) {
            alert("Dados inválidos...")
            return
        }

        alert("Autenticado com sucesso!")
        localStorage.setItem("id_usuario", data.user.id)

        router.push("/dashboard")

    }


    // função para buscar a informação do banco de dados 
    async function buscar() {
        const { data, error } = await supabase.from('usuarios').select()

        console.log(data)
        alteraLogin(data)
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
            alert("Cadastrado com sucesso!")
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
        <div className="loginContainer">
            <div className="loginForm">
                <div className="loginCadastro">Faça o Login</div>

                <input
                    onChange={e => alteraNome(e.target.value)}
                    type="email"
                    placeholder="Email"
                />

                <input
                    onChange={e => alteraSenha(e.target.value)}
                    type="password"
                    placeholder="Senha"
                />

                <button type="button" onClick={autenticar}>Entrar</button>
            </div>
        </div>
    )
}
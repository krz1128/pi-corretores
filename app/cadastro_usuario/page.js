import Link from "next/link"
import "./cadastro_usuario.css" 

export default function CadastroUsuario() {
    return (
        <div>
            <div class="menuSuperior">

                <div>

                    <div class="col-8 bg-dark menuLateral">

                        <div class="text-center mt-5">
                            <h1 class="fs-1"> Cadastre-se </h1>
                        </div>


                        <form onsubmit="salvar(event)">



                            <label>
                                Nome completo:
                                <br />
                                <input required class="inputNome" />
                            </label>

                            <br /><br />

                            <label>
                                Telefone:
                                <br />
                                <input required class="inputTelefone" type="tel" />
                            </label>

                            <br /><br />

                            <label>
                                Crie seu login:
                                <br />
                                <input required class="inputLogin" />
                            </label>

                            <br /><br />

                            <label>
                                Crie sua senha:
                                <br />
                                <input required class="inputSenha" type="password" />
                            </label>

                            <p>Em qual perfil você se encaixa?</p>

                            <select>
                                <option value="someOption">Escolha uma opção</option>
                                <option value="someOption">Corretor</option>
                                <option value="otherOption">Imobiliária</option>
                            </select>


                            <br /><br />


                            <Link href="login">  <button type="salvar"> Criar Login</button> </Link>
                           


                        </form>
                    </div>

                    <hr />


                </div>

            </div>

        </div>


    )
}
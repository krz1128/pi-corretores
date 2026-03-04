import Link from "next/link"
import "./corretores.css"

function Corretores() {
    const listaCorretores = [
        {
            nome: "João Silva",
            email: "joao.silva@imobiliaria.com",
            telefone: "(11) 98765-4321"
        },
        {
            nome: "Maria Oliveira",
            email: "maria.oliveira@imobiliaria.com",
            telefone: "(21) 99876-5432"
        },
        {
            nome: "Carlos Souza",
            email: "carlos.souza@imobiliaria.com",
            telefone: "(31) 91234-5678"
        },
        {
            nome: "Ana Costa",
            email: "ana.costa@imobiliaria.com",
            telefone: "(41) 97654-3210"
        }
    ];

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
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="e-mail" class="col-form-label">e-mail: </label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="salvar" class="btn btn-primary">Salvar</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                        </div>
                    </div>
                </div>
            </div>

            {/* tabela informações corretores */}
            <table class="table">
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
                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    )
}

export default Corretores
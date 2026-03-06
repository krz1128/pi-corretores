'use client'
import { useState } from "react";
import "./clientes.css"
function ListaClientes() {

  const [nome, alteraNome] = useState("")
  const [renda, alteraRenda] = useState()
  const [email, alteraEmail] = useState("")
  const [telefone, alteraTelefone] = useState()

  const [clientes, alteraListaClientes] = useState([
    {
      Nome: "Ana Souza",
      cpf: "123.456.789-00",
      Renda: 3500,
      Telefone: "(11) 98765-4321",
      Email: "ana.souza@email.com",
      dataNascimento: "1995-04-12"
    },
    {
      Nome: "Carlos Pereira",
      cpf: "234.567.890-11",
      Renda: 5200,
      Telefone: "(21) 97654-3210",
      Email: "carlos.p@email.com",
      dataNascimento: "1988-09-25"
    },
    {
      Nome: "Mariana Lima",
      cpf: "345.678.901-22",
      Renda: 2800,
      Telefone: "(31) 96543-2109",
      Email: "mariana.lima@email.com",
      dataNascimento: "2000-01-30"
    },
    {
      Nome: "João Silva",
      cpf: "456.789.012-33",
      Renda: 4100,
      Telefone: "(41) 95432-1098",
      Email: "joao.silva@email.com",
      dataNascimento: "1992-07-18"
    },
    {
      Nome: "Fernanda Costa",
      cpf: "567.890.123-44",
      Renda: 6000,
      Telefone: "(51) 94321-0987",
      Email: "fernanda.c@email.com",
      dataNascimento: "1985-03-05"
    },
    {
      Nome: "Lucas Almeida",
      cpf: "678.901.234-55",
      Renda: 3200,
      Telefone: "(61) 93210-9876",
      Email: "lucas.almeida@email.com",
      dataNascimento: "1998-11-22"
    },
    {
      Nome: "Juliana Martins",
      cpf: "789.012.345-66",
      Renda: 4700,
      Telefone: "(71) 92109-8765",
      Email: "juliana.m@email.com",
      dataNascimento: "1993-06-14"
    },
    {
      Nome: "Rafael Oliveira",
      cpf: "890.123.456-77",
      Renda: 3900,
      Telefone: "(81) 91098-7654",
      Email: "rafael.o@email.com",
      dataNascimento: "1990-12-03"
    },
    {
      Nome: "Patrícia Gomes",
      cpf: "901.234.567-88",
      Renda: 7100,
      Telefone: "(91) 90987-6543",
      Email: "patricia.g@email.com",
      dataNascimento: "1983-08-19"
    },
    {
      Nome: "Bruno Santos",
      cpf: "012.345.678-99",
      Renda: 4500,
      Telefone: "(19) 99876-5432",
      Email: "bruno.santos@email.com",
      dataNascimento: "1996-02-27"
    }
  ]);

  function salvar(e) {
    e.preventDefault()
    const objeto = {
      Nome: nome,
      Renda: renda,
      Email: email,
      Telefone: telefone
    }

    alteraListaClientes(clientes.concat(objeto))
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <h1 />


      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Cadastrar novo cliente
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastrar novo Usuário</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">Digite seu nome completo:</label>
                  <input type="text" class="form-control" onChange={e => alteraNome(e.target.value)} />
                  <div id="" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Digite sua renda (APENAS NÚMEROS):</label>
                  <input type="number" class="form-control" onChange={e => alteraRenda(e.target.value)} />
                  <div id="" class="form-number"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => alteraEmail(e.target.value)} />
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Digite seu telefone (APENAS NÚMEROS):</label>
                  <input type="number" class="form-control" onChange={e => alteraTelefone(e.target.value)} />
                  <div id="" class="form-number"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={salvar} >Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <table class="table tabelaClientes">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Renda</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
        <tbody>

          {
            clientes.map(
              item => <tr>
                <th scope="row">{item.Nome}</th>
                <td>R${item.Renda}</td>
                <td>{item.Email}</td>
                <td>{item.Telefone}</td>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default ListaClientes;
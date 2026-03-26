'use client'
import { useEffect, useState } from "react";
import { createClient, FunctionRegion } from '@supabase/supabase-js'
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')
import "./clientes.css"

 function ListaClientes() {

  const [nome, alteraNome] = useState("")
  const [renda, alteraRenda] = useState()
  const [email, alteraEmail] = useState("")
  const [telefone, alteraTelefone] = useState()
  const [contato, alteraContato] = useState()

  const [clientes, alteraListaClientes] = useState([]);

  async function buscar() {
        const { data, error } = await supabase
            .from('clientes')
            .select()
        console.log(data)
        alteraListaClientes(data)
    }

  async function salvar() {
    const objeto = {
      nome: nome,
      renda: renda,
      email: email,
      telefone: telefone
    }

    const { error } = await supabase
        .from('clientes')
        .insert(objeto)

        alteraListaClientes(clientes.concat(objeto))
}
  


   useEffect(() => {
        buscar()
    }, [])

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
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary" onClick={salvar} >Salvar</button>
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
            <th scope="col">Último contato</th>
          </tr>
        </thead>
        <tbody>

          {
            clientes.map(
              item => <tr>
                <th scope="row">{item.nome}</th>
                <td>R${item.renda}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.ultimo_contato}</td>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default ListaClientes;
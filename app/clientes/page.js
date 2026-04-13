'use client'
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import "./clientes.css"
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')

function ListaClientes() {

  const [nome, alteraNome] = useState("")
  const [renda, alteraRenda] = useState()
  const [email, alteraEmail] = useState("")
  const [telefone, alteraTelefone] = useState()
  const [observacao, alteraObservacao] = useState()

  const [clientes, alteraListaClientes] = useState([]);

  // Estado do cliente sendo editado
  const [clienteEditando, alteraClienteEditando] = useState(null)

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
      telefone: telefone,
      observacao: observacao,
    }

    const { error } = await supabase
      .from('clientes')
      .insert(objeto)

    buscar()
  }

  async function atualizar() {
    if (!clienteEditando) return

    const { error } = await supabase
      .from('clientes')
      .update({
        nome: clienteEditando.nome,
        renda: clienteEditando.renda,
        email: clienteEditando.email,
        telefone: clienteEditando.telefone,
        observacao: clienteEditando.observacao,
      })
      .eq('id', clienteEditando.id)

    if (!error) {
      buscar()
      // Fecha o modal de edição via Bootstrap
      const modalEl = document.getElementById('modalEditar')
      const modal = window.bootstrap.Modal.getInstance(modalEl)
      modal?.hide()
    }
  }

  function abrirEdicao(cliente) {
    alteraClienteEditando({ ...cliente })
  }

  function formataData(data) {
    let data_formatada = new Date(data)
    data_formatada = data_formatada.toLocaleDateString()
    return data_formatada
  }

  function formataHoras(horas) {
    let horas_formatadas = new Date(horas)
    horas_formatadas = horas_formatadas.toLocaleTimeString()
    return horas_formatadas
  }

  useEffect(() => {
    buscar()
  }, [])

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <h1 />

      {/* ── Botão cadastrar ── */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCadastrar">
        Cadastrar novo cliente
      </button>

      {/* ── Modal: Cadastrar ── */}
      <div className="modal fade" id="modalCadastrar" tabIndex="-1" aria-labelledby="modalCadastrarLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalCadastrarLabel">Cadastrar novo Usuário</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Digite seu nome completo:</label>
                <input type="text" className="form-control" onChange={e => alteraNome(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite sua renda (APENAS NÚMEROS):</label>
                <input type="number" className="form-control" onChange={e => alteraRenda(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={e => alteraEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite seu telefone (APENAS NÚMEROS):</label>
                <input type="number" className="form-control" onChange={e => alteraTelefone(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Digite uma observação (NÃO OBRIGATÓRIO):</label>
                <input type="text" className="form-control" onChange={e => alteraObservacao(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary" onClick={salvar}>Salvar</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal: Editar ── */}
      <div className="modal fade" id="modalEditar" tabIndex="-1" aria-labelledby="modalEditarLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalEditarLabel">Editar Cliente</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {clienteEditando && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Nome completo:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={clienteEditando.nome ?? ""}
                      onChange={e => alteraClienteEditando({ ...clienteEditando, nome: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Renda (APENAS NÚMEROS):</label>
                    <input
                      type="number"
                      className="form-control"
                      value={clienteEditando.renda ?? ""}
                      onChange={e => alteraClienteEditando({ ...clienteEditando, renda: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      value={clienteEditando.email ?? ""}
                      onChange={e => alteraClienteEditando({ ...clienteEditando, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Telefone (APENAS NÚMEROS):</label>
                    <input
                      type="number"
                      className="form-control"
                      value={clienteEditando.telefone ?? ""}
                      onChange={e => alteraClienteEditando({ ...clienteEditando, telefone: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Observação:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={clienteEditando.observacao ?? ""}
                      onChange={e => alteraClienteEditando({ ...clienteEditando, observacao: e.target.value })}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={atualizar}>Salvar alterações</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabela ── */}
      <table className="table tabelaClientes">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Renda</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
            <th scope="col">Último contato</th>
            <th scope="col">Observação</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.nome}</th>
              <td>R${item.renda}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{formataData(item.ultimo_contato)}</td>
              <td>{item.observacao}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEditar"
                  onClick={() => abrirEdicao(item)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaClientes;
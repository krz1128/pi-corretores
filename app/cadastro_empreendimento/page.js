'use client'
import "./cadastro_empreendimento.css"
import { useState } from "react";
export default function CadastroEmpreendimento() {

    const [construtora, alteraConstrutora] = useState("")
    const [tipoimovel, alteraTipoimovel] = useState("")
    const [pagamento, alteraPagamento] = useState("")
    const [prazo, alteraPrazo] = useState("")
    const [unidades, alteraUnidades] = useState("")
    const [condominio, alteraCondominio] = useState("")

    const [empreendimentos, alteraCadastroEmpreendimento] = useState([
  {
    construtora: "Tecnisa",
    tipoImovel: "Apartamento (3 Quartos)",
    pagamento: "Financiamento Bancário / 30% Entrada",
    prazoEntrega: "Dezembro 2026",
    unidadesDisponiveis: 12,
    condominio: "R$ 850,00"
  },
  {
    construtora: "MRV",
    tipoImovel: "Studio",
    pagamento: "Minha Casa Minha Vida / Parcelamento em 60x",
    prazoEntrega: "Pronto para morar",
    unidadesDisponiveis: 4,
    condominio: "R$ 280,00"
  },
  {
    construtora: "Cyrela",
    tipoImovel: "Cobertura Duplex",
    pagamento: "A vista ou Fluxo Direto",
    prazoEntrega: "Junho 2027",
    unidadesDisponiveis: 2,
    condominio: "R$ 2.400,00"
  },
  {
    construtora: "Even",
    tipoImovel: "Apartamento (2 Quartos)",
    pagamento: "Financiamento SAC",
    prazoEntrega: "Março 2026",
    unidadesDisponiveis: 25,
    condominio: "R$ 620,00"
  },
  {
    construtora: "Gafisa",
    tipoImovel: "Garden",
    pagamento: "30% durante obra / 70% na entrega",
    prazoEntrega: "Outubro 2025",
    unidadesDisponiveis: 5,
    condominio: "R$ 1.100,00"
  },
  {
    construtora: "Moura Dubeux",
    tipoImovel: "Empresarial (Sala)",
    pagamento: "Investimento Direto",
    prazoEntrega: "Janeiro 2028",
    unidadesDisponiveis: 18,
    condominio: "R$ 450,00"
  },
  {
    construtora: "Tenda",
    tipoImovel: "Apartamento (1 Quarto)",
    pagamento: "Subsídio do Governo / FGTS",
    prazoEntrega: "Julho 2026",
    unidadesDisponiveis: 40,
    condominio: "R$ 210,00"
  },
  {
    construtora: "Eztec",
    tipoImovel: "Apartamento (4 Suítes)",
    pagamento: "Plano Empresário",
    prazoEntrega: "Agosto 2027",
    unidadesDisponiveis: 7,
    condominio: "R$ 3.200,00"
  },
  {
    construtora: "Direcional",
    tipoImovel: "Casa em Condomínio",
    pagamento: "Crédito Imobiliário Caixa",
    prazoEntrega: "Maio 2026",
    unidadesDisponiveis: 15,
    condominio: "R$ 390,00"
  },
  {
    construtora: "Mitre",
    tipoImovel: "Loft Moderno",
    pagamento: "Entrada facilitada em 36x",
    prazoEntrega: "Novembro 2026",
    unidadesDisponiveis: 9,
    condominio: "R$ 550,00"
  }
]);

function salvar(e) {
    e.preventDefault()
    const objeto = {
      construtora: construtora,
      tipoImovel: tipoimovel,
      pagamento: pagamento,
      prazo: prazo,
      unidades: unidades,
      condominio: condominio

    }
    alteraCadastroEmpreendimento(empreendimentos.concat(objeto))
}
    
    return (

        <div>
            <h1>Cadastro de empreendimentos</h1>
            <br />

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
            >
                Novo empreendimento
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Insira as informações
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Construtora:
                                    </label>
                                    <input  onChange={e => alteraConstrutora(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Tipo de imóvel:
                                    </label>
                                    <input onChange={e => alteraTipoimovel(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Forma de pagamento:
                                    </label>
                                    <input onChange={e => alteraPagamento(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Prazo de entrega:
                                    </label>
                                    <input onChange={e => alteraPrazo(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Unidades disponíveis:
                                    </label>
                                    <input onChange={e => alteraUnidades(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="message-text" className="col-form-label">
                                        Condomínio:
                                    </label>
                                    <textarea onChange={e => alteraCondominio(e.target.value)}
                                        className="form-control"
                                        id="message-text"
                                    ></textarea>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button onClick={salvar} type="button" className="btn btn-primary">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <h2>Empreendimentos</h2>

            <table border="1" className="tabelaEmpreendimentos">
                <thead>
                    <tr>
                        <td>Construtora</td>
                        <td>Tipo de imóvel</td>
                        <td>Pagamento</td>
                        <td>Prazo de entrega</td>
                        <td>Unidades disponíveis</td>
                        <td>Condomínio</td>
                    </tr>
                </thead>

                <tbody>
                  {
            empreendimentos.map(
              item => <tr>
                <th scope="row">{item.construtora}</th>
                <td>{item.tipoImovel}</td>
                <td>{item.pagamento}</td>
                <td>{item.prazoEntrega}</td>
                <td>{item.unidadesDisponiveis}</td>
                <td>{item.condominio}</td>
              </tr>
            )
          }
                </tbody>
            </table>
        </div>
    )
}
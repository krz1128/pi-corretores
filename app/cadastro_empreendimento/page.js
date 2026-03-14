'use client'
import "./cadastro_empreendimento.css"
import { useEffect, useState } from "react";
import { createClient, FunctionRegion } from '@supabase/supabase-js'
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')
export default function CadastroEmpreendimento() {

    const [construtora, alteraConstrutora] = useState("")
    const [tipoimovel, alteraTipoimovel] = useState("")
    const [valor, alteraValor] = useState("")
    const [pagamento, alteraPagamento] = useState("")
    const [prazo, alteraPrazo] = useState("")
    const [unidades, alteraUnidades] = useState("")
    const [condominio, alteraCondominio] = useState("")

    const [empreendimentos, alteraCadastroEmpreendimento] = useState([]);


       async function buscar() {
        const { data, error } = await supabase
            .from('empreendimentos')
            .select()
        console.log(data)
        alteraCadastroEmpreendimento(data)
    }

    async function salvar() {
        const objeto = {
            construtora: construtora,
            tipo_imovel: tipoimovel,
            valor_empreendimento: valor,
            forma_pagamento: pagamento,
            prazo_entrega: prazo,
            unidades_disponiveis: unidades,
            condominio: condominio

        }

        const { error } = await supabase
            .from('empreendimentos')
            .insert(objeto)
        console.log(error)

        if (error == null) {
            alert("Empreendimento cadastrado com sucesso")
            alteraConstrutora("")
            alteraTipoimovel("")
            alteraValor("")
            alteraPagamento("")
            alteraPrazo("")
            alteraUnidades("")
            alteraCondominio("")
            location.reload()
        }
        else {
            alert("Dados inválidos, verifique os campos e tente novamente.")
        }
    }

    useEffect(() => {
        buscar()
    }, [])

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
                                    <input onChange={e => alteraConstrutora(e.target.value)}
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
                                        Valor:
                                    </label>
                                    <input onChange={e => alteraValor(e.target.value)}
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
                        <td>Valor</td>
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
                                <td>{item.tipo_imovel}</td>
                                <td>{item.valor_empreendimento}</td>
                                <td>{item.forma_pagamento}</td>
                                <td>{item.prazo_entrega}</td>
                                <td>{item.unidades_disponiveis}</td>
                                <td>{item.condominio}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
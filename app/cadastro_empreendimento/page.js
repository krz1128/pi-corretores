import "./cadastro_empreendimento.css"
export default function CadastroEmpreendimento() {
    return (
        <div>
            <h1>Cadastro de empreendimentos</h1>
            <br/>
            <h2>Empreendimentos</h2>

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
            >
                Open modal for @mdo
            </button>

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@fat"
            >
                Open modal for @fat
            </button>

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
            >
                Open modal for @getbootstrap
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
                                New message
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
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Recipient:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">
                                        Message:
                                    </label>
                                    <textarea
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
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <form>
                <label>
                    Construtora:
                    <input type="text" className="inputNomeConstrutora" />
                </label>

                <br /><br />

                <label>
                    Tipo de imóvel:
                    <input type="text" className="inputTipoImovel" />
                </label>

                <br /><br />

                <label>
                    Forma de pagamento:
                    <input type="text" className="inputFormaPagamento" />
                </label>

                <br /><br />

                <label>
                    Prazo de entrega:
                    <input type="text" className="inputPrazo" />
                </label>

                <br /><br />

                <label>
                    Imóveis disponíveis:
                    <input
                        type="text"
                        className="inputqntImovelEmpreendimento"
                    />
                </label>

                <br /><br />

                <label>
                    Condomínio:
                    <input type="text" className="inputCondominio" />
                </label>

                <br /><br />

                <button type="submit">Salvar</button>
                <button type="reset">Cancelar</button>
            </form>

            <h2>Empreendimentos</h2>

            <table border="1" className="tabelaEmpreendimentos">
                <thead>
                    <tr>
                        <td>Construtora</td>
                        <td>Tipo de imóvel</td>
                        <td>Pagamento</td>
                        <td>Prazo de entrega</td>
                        <td>Imóveis disponíveis</td>
                        <td>Condomínio</td>
                    </tr>
                </thead>

                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}
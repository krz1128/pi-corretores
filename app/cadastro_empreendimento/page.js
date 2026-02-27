import "./cadastro_empreendimento.css"
export default function CadastroEmpreendimento() {
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Tipo de imóvel:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Forma de pagamento:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Prazo de entrega:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Unidades disponíveis:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="message-text" className="col-form-label">
                                        Condomínio:
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
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary">
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
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}
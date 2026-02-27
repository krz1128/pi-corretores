import Link from "next/link"
import "./painel_adm.css"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>


            <div className="row tudo">

                <div className="col-1">
                    <table>
                        <tbody>

                            <tr>

                                <td><img src="https://placehold.co/50" className="foto" /></td>
                                <td><h1 className="fs-5 ImobConnect">ImobConnect</h1></td>

                            </tr>


                        </tbody>
                    </table>

                </div>


                <div className="col-3 todos">
                    <div className="menulateral">


                        <div className="text-center mt-5">
                        </div>

                        <div className="botaoinicio list-group list-group-flush fs-4">
                            <Link href="#" className="list-group-item list-group-item-action botaoinicio"aria-current="true">Início</Link>
                            <Link href="corretores" className="list-group-item list-group-item-action active">Corretores</Link>
                            <Link href="lista_clientes" className="list-group-item list-group-item-action">Clientes</Link>
                            <a href="#" className="list-group-item list-group-item-action">Empreendimentos</a>
                            <Link href="imoveis" className="list-group-item list-group-item-action">Imóveis</Link>

                        </div>

                        <div className="text-center menuLateralPerfil">
                            <img className="me-4" src="https://placehold.co/50" />

                            <div className="btn-group dropend">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Perfil
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item active" href="#">Editar</a></li>
                                    <li><a className="dropdown-item" href="#">Sair</a></li>
                                </ul>
                            </div>

                        </div>




                    </div>
                </div>
                <div className="col-7 menul">


                    <table>



                        <tbody>

                            <tr>



                                <td>

                                    <div type="button" className="card" style={{ width: 220 }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <td>

                                    <div className="card" style={{ width: 220 }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <td>

                                    <div className="card" style={{ width: 220 }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        </tbody>



                        <tbody>

                            <tr>

                                <td>


                                    <div className="card cartao2 " style={{ width: 220 }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>

                                </td>
                            </tr>

                            <tr>

                                <td>


                                    <div className="card cartao2 " style={{ width: 220 }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>

                                </td>
                            </tr>

                            <tr>

                                <td>


                                    <div className="card cartao2 " style={{ width: 220 }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        </tbody>


                    </table>

                </div>





                <table className="table table-striped table-hover tabelausuarios ">

                    <thead className="table-primary">
                        <tbody>

                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>

                        </tbody>
                    </thead>


                    <tbody>
                        <tbody>
                            <th scope="row">1</th>
                            <td>23526</td>
                            <td> <img className="rounded-circle" src="https://placehold.co/30" /> Sei lá 1</td>

                        </tbody>
                        <tbody>
                            <th scope="row">2</th>
                            <td>63464</td>
                            <td> <img className="rounded-circle" src="https://placehold.co/30" /> Sei lá 2</td>

                        </tbody>
                        <tbody>
                            <th scope="row">3</th>
                            <td>4747</td>
                            <td> <img className="rounded-circle" src="https://placehold.co/30" /> Sei lá 3</td>

                        </tbody>
                    </tbody>
                </table>
            </div>

        </div >


    )
}


import Link from "next/link"
import "./painel_adm.css"

export default function Dashboard() {
    return (

        <table>


            <tbody>

                <tr>



                    <td>

                        <div type="button" className="card" style={{ width: 220 }}>
                            <div className="card-body">
                                <h5 className="card-title">Total Clientes</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </td>



                    <td>

                        <div className="card" style={{ width: 220 }}>
                            <div className="card-body">
                                <h5 className="card-title">Em acompanhamento</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </td>


                    <tr>

                        <td>

                            <div className="card" style={{ width: 220 }}>
                                <div className="card-body">
                                    <h5 className="card-title">Investidores</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </td>

                    </tr>
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

    )
}


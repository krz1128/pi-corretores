import Link from "next/link"
import "./painel_adm.css"

export default function Dashboard() {
    return (

        <table>

            <tbody>

                <tr>

                    <td>


                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Total de clientes</strong></h5>
                                <p className="card-text"></p>
                            
                            </div>
                        </div>

                    </td>

                    <td>

                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Total de empreendimentos</strong></h5>
                                <p className="card-text"></p>
                            
                            </div>
                        </div>

                    </td>

                    <td>

                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Total de imóveis</strong></h5>
                                <p className="card-text"></p>
                            
                            </div>
                        </div>

                    </td>
                </tr>

            </tbody>

            <tbody>
                <tr>
                    <td>


                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Imóveis vendidos</strong></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                               
                            </div>
                        </div>

                    </td>


                    <td>


                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Imóveis alugados</strong></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                
                            </div>
                        </div>

                    </td>
                    
                    <td>


                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Imóveis desligados </strong></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                
                            </div>
                        </div>

                    </td>
                </tr>

            </tbody>


        </table>

    )
}


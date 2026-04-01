"use client"
import { useEffect, useState } from "react";
import "./painel_adm.css";
import supabase from "../conexao/supabase";

export default function Dashboard() {

    const [clientes, alteraClientes] = useState(0);
    const [empreendimentos, alteraEmpreendimentos] = useState(0);
    const [imoveis, alteraImoveis] = useState(0);
    const [vendidos, alteraVendidos] = useState(0);
    const [alugados, alteraAlugados] = useState(0);
    const [desligados, alteraDesligados] = useState(0);

    const [listaImoveis, setListaImoveis] = useState([]);


    useEffect(() => {

        
        async function fetchData() {

            const { count: totalClientes } = await supabase
                .from("clientes")
                .select("*", { count: "exact", head: true });

            const { count: totalEmpreendimentos } = await supabase
                .from("empreendimentos")
                .select("*", { count: "exact", head: true });

            const { count: totalImoveis } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true });

            const { count: totalVendidos } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true })
                .eq("status", "vendido");

            const { count: totalAlugados } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true })
                .eq("status", "alugado");

            const { count: totalDesligados } = await supabase
                .from("imoveis")
                .select("*", { count: "exact", head: true })
                .eq("status", "desligado");

            const { data: imoveisData } = await supabase
                .from("imoveis")
                .select("id, preco")
                .order("preco", { ascending: true });

            alteraClientes(totalClientes || 0);
            alteraEmpreendimentos(totalEmpreendimentos || 0);
            alteraImoveis(totalImoveis || 0);
            alteraVendidos(totalVendidos || 0);
            alteraAlugados(totalAlugados || 0);
            alteraDesligados(totalDesligados || 0);

        }

        fetchData();
    }, []);

    return (

        <table>

            <tbody>
                <tr>

                    <td>
                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Total de clientes</strong></h5>
                                <p className="card-text">{clientes}</p>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Total de empreendimentos</strong></h5>
                                <p className="card-text">{empreendimentos}</p>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Total de imóveis</strong></h5>
                                <p className="card-text">{imoveis}</p>
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
                                <p className="card-text">{vendidos}</p>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Imóveis alugados</strong></h5>
                                <p className="card-text">{alugados}</p>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="card cartao2 " style={{ width: 300 }}>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Imóveis desligados</strong></h5>
                                <p className="card-text">{desligados}</p>
                            </div>
                        </div>
                    </td>

                </tr>
            </tbody>
            <select class="form-select w-25 mb-3">
                <option>Ordenar por</option>
                <option value="maior">Mais caro</option>
                <option value="menor">Mais barato</option>
            </select>
        </table>


    )
}

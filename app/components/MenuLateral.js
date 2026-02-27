import Link from "next/link";
import "./MenuLateral.css"

export default function Menulateral() {
    return (
        <div className="">


            <div className="text-center mt-5">
            </div>

            <div className="botaoinicio list-group list-group-flush fs-4">
                <Link href="/" className="list-group-item list-group-item-action botaoinicio" aria-current="true">Início</Link>
                <Link href="corretores" className="list-group-item list-group-item-action active">Corretores</Link>
                <Link href="lista_clientes" className="list-group-item list-group-item-action">Clientes</Link>
                {/* <a href="#" className="list-group-item list-group-item-action">Empreendimentos</a> */}
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

    )
}
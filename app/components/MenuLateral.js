import Link from "next/link";
import "./MenuLateral.css";

export default function MenuLateral() {
    return (
        <div className="menulateral d-flex flex-column justify-content-between">

            <div className="menuLinks mt-4">
                <h3 className="text-center mb-4">Dashboard</h3>
                <div className="list-group list-group-flush fs-5">
                    <Link href="dashboard" className="list-group-item list-group-item-action">Início</Link>
                    <Link href="lista_diaria" className="list-group-item list-group-item-action">Lista diária</Link>
                    <Link href="corretores" className="list-group-item list-group-item-action">Corretores</Link>
                    <Link href="clientes" className="list-group-item list-group-item-action">Clientes</Link>
                    <Link href="cadastro_empreendimento" className="list-group-item list-group-item-action">Empreendimentos</Link>
                    <Link href="imoveis" className="list-group-item list-group-item-action">Imóveis</Link>
                </div>
            </div>

            <div className="menuPerfil text-center mb-4">
                <img className="perfilFoto mb-2" src="https://placehold.co/50" alt="Perfil" />
                <div className="btn-group dropend">
                    <button type="button" className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Editar</a></li>
                        <li><a className="dropdown-item" href="#">Sair</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
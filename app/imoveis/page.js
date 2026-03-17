'use cliente'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./imoveis.css";

function PaginaImoveis() {

    const tabelaImoveis = [

        {
            nome: "Casa Jardim Europa",
            endereco: "Rua das Palmeiras, 123 - São Carlos/SP",
            valor: 450000
        },
        {
            nome: "Apartamento Centro Prime",
            endereco: "Av. São Carlos, 890 - Centro - São Carlos/SP",
            valor: 320000
        },
        {
            nome: "Sobrado Bela Vista",
            endereco: "Rua das Acácias, 456 - Bela Vista - São Carlos/SP",
            valor: 680000
        }
    ];

    return (
        <div>

            <div className="apresentacaoSite fs-9 text-center" >

                <h1> Está procurando imóveis? Abaixo nós temos a solução para você! </h1>

            </div>


            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.pinimg.com/originals/07/11/0a/07110a80aa019d7f1e11ca050b77aadd.jpg" class="d-block w-50"  alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.adsttc.com/media/images/624c/abf4/0ba6/da01/66c7/d26d/large_jpg/014-casa-dotta-galeria-733.jpg?1649191946" class="d-block w-50" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://plazachapeco.com.br/wp-content/uploads/2019/02/diferenca-entre-kitnet-studio-flat-e-loft.jpg" class="d-block w-50" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>





    )
}

export default PaginaImoveis()
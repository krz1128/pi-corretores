import Link from "next/link";
import "./paginaInicial.css"
export default function Home() {
  return (
    <div>

      <div class="text-center paginaInicial">
        <br />
        <br />
        <br />

        <h1> ImobConnect </h1>

        <div>

          <div class="card text-center cardInicial fs-2">
            <div class="cardInicial">
              <h5> Gestão completa em um só lugar </h5>
              <hr />
            </div>
            <div class="cardGrande">

              <br />

              <h5 class="cardApresentacao fs-5 ">Nosso site foi desenvolvido especialmente para imobiliárias e
                corretores que
                desejam mais organização, praticidade e resultados no dia a dia.
                <br />
                Aqui, você consegue conectar corretores a leads de forma rápida e estratégica, facilitando o
                contato com clientes e aumentando as oportunidades de negócio.
                <br />
                A plataforma foi pensada para
                otimizar o tempo, melhorar o acompanhamento dos atendimentos e tornar a gestão muito mais
                eficiente.
                <br />
                Além disso, o sistema permite a inserção e organização de imóveis, deixando todas as informações
                centralizadas em um único lugar.
                <br />
                Assim, imobiliárias e corretores trabalham de forma integrada,
                com mais controle e produtividade.

                Simples, prático e feito para gerar resultados.
              </h5>

              <br />
              <div class="card text-center cardInicial fs-2">
                <div class="cardInicial">
                  <h5> Conheça mais sobre nós </h5>
                </div>



              </div>

            </div>

            <br />

            <div class="botaoDuplo">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">

                <Link href="cadastro_usuario"> <button class="btn btn-secondary btn-sm" > Cadastro </button> </Link>

                <button class="btn btn-secondary btn-sm" > Login </button>
              </div>

            </div>

          </div>



        </div>
      </div>
    </div>
  );
}

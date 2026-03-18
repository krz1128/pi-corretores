'use client'
<<<<<<< Updated upstream
import { useEffect, useState } from "react";

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://ogybpinvvqkfjvotqzcf.supabase.co', 'sb_publishable_SOLcXSeorAHNpnq8o04xkw_IllVGRXg')
=======

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
const supabase = createClient('https://dneagzvvveugziychgoe.supabase.co', 'sb_publishable_NJyYA4_ofXGrm_XhXaOC6w_QqGimeA0')


function imoveis() {



    const [nome, alteraNome] = useState("")
    const [endereco, alteraEndereco] = useState("")
    const [valor, alteraValor] = useState("")


    const [imoveis, alteraImoveis] = useState([])

    async function buscar() {


        const { data, error } = await supabase
            .from('imoveis')
            .select()
        console.log(data)
        alteraLivros(data)

    }

    async function salvar(e) {

        const objeto = {
            nome: nome,
            endereco: endereco,
            valor: valor.replace(",", "."),
        }



        const { error } = await supabase
            .from('imoveis')
            .insert(objeto)
        console.log(error)

        if (error == null) {
            alert("Imóvel cadastrado com sucesso!")
            alteraNome("")
            alteraEndereco("")
            alteraValor("")

        } else {
            alert("Dados inválidos, verifique os campos e tente novamente...")
        }

    }

    useEffect(() => {
        buscar()
    }, [])

    return (
        <div>


            <div class="titulo"></div>
            <h1>Página de imóveis</h1>


            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar imóvel</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title fs-5" id="exampleModalLabel">Novo imóvel </h2>
                            <button class="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nome:</label>
                                    <input value={(nome)} type="text" class="form-control" id="recipient-name" onChange={e => alteraNome(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"> Endereço: </label>
                                    <textarea value={(endereco)} class="form-control" id="message-text" onChange={e => alteraEndereco(e.target.value)}></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"> Valor: </label>
                                    <textarea value={(valor)} class="form-control" id="message-text" onChange={e => alteraValor(e.target.value)}></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button onClick={salvar} class="btn btn-primary">Salvar</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                        </div>
                    </div>
                </div>



            </div>
>>>>>>> Stashed changes

                
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"> Nome </th>
                        <th scope="col"> Endereço </th>
                        <th scope="col"> Valor </th>
                    </tr>
                </thead>

                 <tbody>

                {
                    imoveis.map(

                        item => <tr>
                            <th scope="row">{item.nome}</th>
                            <td>{item.endereco}</td>
                            <td>{item.valor}</td>
                        </tr>
                    )
                }

            </tbody>
            </table>



<<<<<<< Updated upstream
function Imoveis() {
=======
>>>>>>> Stashed changes

    const [nome, alteraNome] = useState("")
    const [endereco, alteraEndereco] = useState("")
    const [valor, alteraValor] = useState("")

<<<<<<< Updated upstream

const [listaImoveis, alteraListaImoveis] = useState([]);


async function buscar() {
    const { data, error } = await supabase
        .from('imoveis')
        .select()
    console.log(data)
    alteraListaImoveis(data)
}


async function salvar(e) {

    const objeto = {
        nome: nome,
        endereco: endereco,
        valor: valor
    }



    const { error } = await supabase.from('imoveis').insert(objeto)
    console.log(error)

    if (error == null) {
        alert("Imóvel cadastrado com sucesso!")
        alteraNome("")
        alteraEndereco("")
        alteraValor("")

        buscar()
    } else {
        alert("Dados inválidos, verifique os campos e tente novamente...")
    }

}





useEffect(() => {
    buscar()
}, [])



return (
    // div principal
    <div>


        <div class="titulo"></div>
        <h1>Página de Imóveis </h1>


        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar Imóvel</button>

       
        <div class="modal fade" id="exampleModal" tabindex="-1" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">Novo imóvel </h2>
                        <button class="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label"> Nome: </label>
                                <input value={(nome)} type="text" class="form-control" id="recipient-name" onChange={e => alteraNome(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="e-mail" class="col-form-label"> Endereço: </label>
                                <textarea value={(endereco)} class="form-control" id="message-text" onChange={e => alteraEndereco(e.target.value)}></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label"> Valor </label>
                                <textarea value={(valor)} class="form-control" id="message-text" onChange={e => alteraValor(e.target.value)}></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button onClick={salvar} class="btn btn-primary">Salvar</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                    </div>
                </div>
            </div>
        </div>

        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"> Nome </th>
                    <th scope="col"> Endereço </th>
                    <th scope="col"> Valor </th>
                </tr>
            </thead>
            <tbody>

                {
                    listaImoveis.map(

                        item => <tr>
                            <th scope="row">{item.nome}</th>
                            <td>{item.endereco}</td>
                            <td>{item.valor}</td>
                        </tr>
                    )
                }

            </tbody>
        </table>


    </div>

)
}

export default Imoveis;
=======
    )
}

export default imoveis;

>>>>>>> Stashed changes

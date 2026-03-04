function ListaClientes () {

    const clientes = [
  {
    Nome: "Ana Souza",
    cpf: "123.456.789-00",
    renda: 3500,
    telefone: "(11) 98765-4321",
    email: "ana.souza@email.com",
    dataNascimento: "1995-04-12"
  },
  {
    Nome: "Carlos Pereira",
    cpf: "234.567.890-11",
    renda: 5200,
    telefone: "(21) 97654-3210",
    email: "carlos.p@email.com",
    dataNascimento: "1988-09-25"
  },
  {
    Nome: "Mariana Lima",
    cpf: "345.678.901-22",
    renda: 2800,
    telefone: "(31) 96543-2109",
    email: "mariana.lima@email.com",
    dataNascimento: "2000-01-30"
  },
  {
    Nome: "João Silva",
    cpf: "456.789.012-33",
    renda: 4100,
    telefone: "(41) 95432-1098",
    email: "joao.silva@email.com",
    dataNascimento: "1992-07-18"
  },
  {
    Nome: "Fernanda Costa",
    cpf: "567.890.123-44",
    renda: 6000,
    telefone: "(51) 94321-0987",
    email: "fernanda.c@email.com",
    dataNascimento: "1985-03-05"
  },
  {
    Nome: "Lucas Almeida",
    cpf: "678.901.234-55",
    renda: 3200,
    telefone: "(61) 93210-9876",
    email: "lucas.almeida@email.com",
    dataNascimento: "1998-11-22"
  },
  {
    Nome: "Juliana Martins",
    cpf: "789.012.345-66",
    renda: 4700,
    telefone: "(71) 92109-8765",
    email: "juliana.m@email.com",
    dataNascimento: "1993-06-14"
  },
  {
    Nome: "Rafael Oliveira",
    cpf: "890.123.456-77",
    renda: 3900,
    telefone: "(81) 91098-7654",
    email: "rafael.o@email.com",
    dataNascimento: "1990-12-03"
  },
  {
    Nome: "Patrícia Gomes",
    cpf: "901.234.567-88",
    renda: 7100,
    telefone: "(91) 90987-6543",
    email: "patricia.g@email.com",
    dataNascimento: "1983-08-19"
  },
  {
    Nome: "Bruno Santos",
    cpf: "012.345.678-99",
    renda: 4500,
    telefone: "(19) 99876-5432",
    email: "bruno.santos@email.com",
    dataNascimento: "1996-02-27"
  }
];
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <h1/>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Renda</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
       <tbody>
          
          {
            clientes.map(
              item => <tr>
            <th scope="row">{item.Nome}</th>
            <td>R${item.renda}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>
          </tr>
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default ListaClientes;
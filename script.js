// Função utilitária para renderizar o nome do cliente e botão de remoção na lista de clientes.
function renderCliente(cliente) {
  const item = document.createElement("li");
  item.innerHTML = `${cliente.nome} <button onclick="remove('${cliente._id}')">X</button>`;
  htmlLista.appendChild(item);
};
// Função utilitária para deletar o nome do cliente quando o botão X é clicado.
function remove(_id) {
    // o método DELETE remove o nome da database
  fetch(`https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes/${_id}`, {
    method: "DELETE"
  }).then(() => {
    // Declara uma variável button que procura o primeiro botão com o ID do cliente deletado na página.
    const button = document.querySelector(`button[onclick="remove('${_id}')"]`);
    // Se o botão for encontrado, remove o elemento. button.parentElement é o <li> que tem o ID do cliente.
    if (button) button.parentElement.remove();
  });
};

// Resgata o id listaClientes do HTML, onde está a lista de clientes
const htmlLista = document.getElementById("listaClientes")
// Fetch no CrudCrud, default GET, retorna objeto Response
fetch("https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes") 
.then(resposta => resposta.json()) // Converte o objeto Response num json.
// .then usa como argumento outra função anônima que declara a variável listaDeClientes
.then(listaDeClientes => {
    // Itera sobre cada elemento do array (cliente)
    listaDeClientes.forEach(renderCliente);
});
// Resgata o botão Cadastrar no HTML quando ele é clicado
document.getElementById("add").addEventListener("click", ()=>{
    // Determina a variável nome como sendo o valor inputado pelo usuário no campo "cliente"
    const nome = document.getElementById("cliente").value;
    // Requisição POST para o CrudCrud criar o nome
    fetch("https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Converte o objeto JS para uma string JSON
        body: JSON.stringify({nome: nome})
    })// Converte o objeto Response em json
    // Independente dos dados gravados na API serem um JSON, ela sempre retorna um objeto Response, portanto precisa ser convertido de volta para JSON
    .then(resposta =>resposta.json())
    .then(cliente => {
        renderCliente(cliente);
    });
});
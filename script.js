// Resgata o id listaClientes do HTML, onde está a lista de clientes
const htmlLista = document.getElementById("listaClientes")
// Fetch no CrudCrud, default GET, retorna objeto Response
fetch("https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes") 
.then(resposta => resposta.json()) // Converte o objeto Response num json.
// .then usa como argumento outra função anônima que declara a variável listaDeClientes
.then(listaDeClientes => {
    // Itera sobre cada elemento do array (cliente)
    listaDeClientes.forEach(cliente => {
        // Cria um novo elemento de lista para cada tarefa, armazenado numa variável item
        const item = document.createElement("li");
        // Define o conteúdo de cada item como sendo o nome do cliente, e o HTML para renderizar um botão X
        // é utilizado .innerHTML ao invés de .textContent para sinalizar que o conteúdo dessa variável deve ser introduzido ao código HTML, e não transformado em string.
        item.innerHTML = `${cliente.nome} <button>x</button>`;
        // Adiciona novo item à lista de clientes do HTML
        htmlLista.appendChild(item);
    });
});

document.getElementById("add").addEventListener("click", ()=>{
    const nome = document.getElementById("cliente").value;

    fetch("https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome: nome})
    })
    .then(resposta =>resposta.json())
    .then(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.nome} <button>x</button>`;
        htmlLista.appendChild(item);
    })

});
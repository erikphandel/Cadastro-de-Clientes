const clientes = document.getElementById("listaClientes")

fetch("https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65") 
.then(resposta => resposta.json())
.then((listaDeClientes) => {

    listaDeClientes.forEach(clientes => {
        const item = document.createElement("li")

    });
})
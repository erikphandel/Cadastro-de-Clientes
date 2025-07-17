// Função utilitária para renderizar o nome do cliente e botão de remoção na lista de clientes.
function renderCliente(cliente) {
  const item = document.createElement("li");
  item.innerHTML = `${cliente.nome} <button onclick="remove('${cliente._id}')">X</button>`;
  htmlLista.appendChild(item);
};
// Função utilitária para deletar o nome do cliente quando o botão X é clicado.
function remove(_id) {
  fetch(`https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes/${_id}`, {
    method: "DELETE"
  }).then(() => {
    const button = document.querySelector(`button[onclick="remove('${_id}')"]`);
    if (button) button.parentElement.remove();
  });
};

const htmlLista = document.getElementById("listaClientes")
fetch("https://crudcrud.com/api/90b905aface849ce864c05c63e3ede65/clientes") 
.then(resposta => resposta.json())
.then(listaDeClientes => {
    listaDeClientes.forEach(renderCliente);
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
        renderCliente(cliente);
    });
});
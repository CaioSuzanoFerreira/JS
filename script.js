function salvarLista()
{
    const item = document.getElementById("item").value;
    //Verifica se o item não está vazio
    if (item !== "")
        {
            //Obtém a lista existente do localStorage ou cria uma uma lista
            let lista = JSON.parse(localStorage.getItem('lista')) || [];
            //Adiciona novo item a lista
            lista.push(item);
            //Armazena a lista atualizada no localStorage
            localStorage.setItem('lista', JSON.stringify(lista));
            //Limpa o campo de entrada
            document.getElementById('item').value = '';
        }
}


function visualizarLista()
{
    const lista = JSON.parse(localStorage.getItem('lista')) || [];


    const listaHtml = document.getElementById('lista');


    listaHtml.innerHTML = '';


    lista.forEach(item =>
    {
        const li = document.createElement('li');


        li.textContent = item;


        listaHtml.appendChild(li);
    });
}


function limparLista()
{
    localStorage.removeItem('lista');
    document.getElementById('lista').innerHTML = '';
}

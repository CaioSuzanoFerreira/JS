console.log("1 - Início do processo");


setTimeout (()=>{
    console.log("2 - Meio do processo")
}, 2000)


console.log("3 - Fim do processo")


//////////////////////////////////////////////////////
const btn = document.getElementById("botao");
const popup = document.getElementById("popup");


btn.addEventListener("click", ()=>
{
    popup.classList.add("popup-active");


    setTimeout(() =>
        {
            popup.classList.remove("popup-active")
        }, 2500)
})
/////////////////////////////////////////////////////////


for (let letra of "olá")
    {
        setTimeout(() =>
        {
            console.log(letra)
        }, 1000);
       
    }


for (let letra of "mundo")
    {
        setTimeout(() =>
            {
                console.log(letra)
            }, 3000);
    }




let counter = 0
const interval = setInterval(()=>
    {
        counter++
        console.log("Counter: ", counter)


        if (counter >= 5)
            {
                clearInterval(interval)
                console.log("O intervalo foi removido")
            }
    }, 1000)




const eventoFuturo = (res) =>
    {
        return new Promise((resolve, reject)=>
            {
                setTimeout(()=>
                    {
                        res ? resolve("Promessa resolvida") : reject("Promessa rejeitada")
                    }, 2000)
            })
    }


eventoFuturo(true)
    .then((response)=>
        {
            console.log(response)
        })


eventoFuturo(false)
        .catch((error)=>
            {
                console.log(error)
            })
               




const bd =
[
    {id: 1, nome: "produto 1", preco: 1500},
    {id: 2, nome: "produto 2", preco: 2500},
    {id: 3, nome: "produto 3", preco: 3500},
]
const pedirProdutos = () =>
    {
        return new Promise((resolve, reject)=>
            {
                setTimeout(() =>
                    {
                        resolve(bd)
                    },5000)
            })
    }


let produtos = []


const renderProduto = (arr) =>
    {
        console.log(produtos)
    }


pedirProdutos()
    .then((res) =>
        {
            produtos = res
            renderProduto(produtos)
        })

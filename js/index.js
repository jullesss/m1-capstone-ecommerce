
// Selecão da Ul estática e funcao para percorrer o banco de dados

function percorreArray(data){

    let ul = document.querySelector('.cards')

    for (let i=0; i<data.length; i++){
        let card = document.createElement('li')
        let figura = document.createElement('figure')
        let imagem = document.createElement('img')
        let label = document.createElement('div')
        let nome = document.createElement('h3')
        let descricao = document.createElement('p')
        let valor = document.createElement('h4')
        let addCarrinho = document.createElement('a')
        
        card.classList.add('product')
        figura.classList.add('product-fig')
        imagem.classList.add('product-img')
        label.classList.add('tag')
        nome.classList.add('product-title')
        descricao.classList.add('product-description')
        valor.classList.add('product-price')
        addCarrinho.classList.add('add-chart')
        addCarrinho.id = data[i].id


        imagem.setAttribute("alt", data[i].imageDescription)
        imagem.src = data[i].img
        label.innerText = data[i].tag
        nome.innerText = data[i].nameItem
        descricao.innerText = data[i].description
        valor.innerText = data[i].value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL' })
        addCarrinho.innerText = "Adicionar ao carrinho"

        ul.appendChild(card)
        figura.appendChild(imagem)
        card.appendChild(figura)
        card.appendChild(label)
        card.appendChild(nome)
        card.appendChild(descricao)
        card.appendChild(valor)
        card.appendChild(addCarrinho)   
    }
}

percorreArray(data)
carrinhoVazio()

// Criando evento de adicionar ao carrinho

let adicionar = document.getElementsByClassName("add-chart");

for (let i = 0; i < adicionar.length; i++){
  let add = adicionar[i];

  add.addEventListener("click", function (event) {
    let elemento = event.target;
    let idElemento = elemento.id;
    let id = parseInt(idElemento);

    let produtoAdd = localizaProduto(id);

    insereProduto(produtoAdd);

  });
}


// Função para localizar o produto em questão

function localizaProduto(id){

    for (let i=0; i<data.length; i++){
        let produtoAdd = data[i]
        if (produtoAdd.id === id){
            return produtoAdd
        }
    }
}

let count = 0

let array = []

function soma(array){
    let resultado = 0

    for (let i=0; i< array.length; i++){
        resultado += array[i]
    }

    document.querySelector('#valor-total').innerText = `${resultado}`
}

let carrinhoCompras = document.getElementById('lista-carrinho')

function insereProduto(produtoAdd){

    array.push(produtoAdd.value)

    count++
    document.querySelector('#valor-qte').innerText = `${count}`

    let card = document.createElement('li')
    let figura = document.createElement('figure')
    let imagem = document.createElement('img')
    let info = document.createElement('div')
    let nome = document.createElement('h3')
    let valor = document.createElement('h4')
    let removerCarrinho = document.createElement('a')
    
    card.classList.add('carrinho-product')
    figura.classList.add('carrinho-product-fig')
    imagem.classList.add('carrinho-product-img')
    info.classList.add('carrinho-infos')
    nome.classList.add('carrinho-product-title')
    valor.classList.add('carrinho-product-price')
    removerCarrinho.classList.add('remove-chart')

    imagem.src = produtoAdd.img
    nome.innerText = produtoAdd.nameItem
    valor.innerText = produtoAdd.value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL' })
    removerCarrinho.innerText = "Remover produto"

    figura.appendChild(imagem)
    card.appendChild(figura)
    card.append(info)
    info.appendChild(nome)
    info.appendChild(valor)
    info.appendChild(removerCarrinho)

    carrinhoCompras.appendChild(card)

    let divFrases = document.querySelector('#div-frases')

    if (carrinhoCompras.children.length > 0){
        divFrases.style.display = "none"
    }

    removerCarrinho.addEventListener('click', function(event){
        let card = event.path[2]
        card.remove()

        console.log(card)

        count--
        document.querySelector('#valor-qte').innerText = `${count}`

        if (carrinhoCompras.children.length === 0){
            divFrases.style.display = "flex"
       }
   })

   soma(array)
}

function carrinhoVazio(){
    let divCarrinho = document.getElementById('carrinho')

    let divFrases = document.createElement('div')
    let fraseMaior = document.createElement('p')
    let fraseMenor = document.createElement('p')

    divFrases.id = 'div-frases'
    fraseMaior.id = 'frase-maior'
    fraseMenor.id = 'frase-menor'

    fraseMaior.innerText = "Carrinho vazio"
    fraseMenor.innerText = "Adicione itens"

    divCarrinho.appendChild(divFrases)
    divFrases.appendChild(fraseMaior)
    divFrases.appendChild(fraseMenor)

}

// Função pra contagem de itens do carrinho e valor final

function mostraFinal(){
    let divAside = document.getElementById('pesquisa-e-carrinho')

    let infoFinal = document.createElement('div')
    let divInfoQte = document.createElement('div')
    let qte = document.createElement('p')
    let valorQte = document.createElement('p')
    let divInfoTotal = document.createElement('div')
    let total = document.createElement('p') 
    let valorTotal = document.createElement('p')

    infoFinal.id = 'div-final'
    divInfoQte.id = 'div-qte'
    divInfoTotal.id = 'div-infoTotal'
    valorQte.id = 'valor-qte'
    valorTotal.id = 'valor-total'

    qte.innerHTML = "Quantidade:"
    total.innerText = "Total:"

    divAside.appendChild(infoFinal)
    infoFinal.appendChild(divInfoQte)
    divInfoQte.appendChild(qte)
    divInfoQte.appendChild(valorQte)
    infoFinal.appendChild(divInfoTotal)
    divInfoTotal.appendChild(total)
    divInfoTotal.appendChild(valorTotal)
}

mostraFinal()






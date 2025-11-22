let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function addCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    salvarCarrinho();
    atualizarCarrinho();
    alert(nome + " adicionada ao carrinho!");
}

function atualizarCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    let total = document.getElementById("total");

    lista.innerHTML = "";
    let soma = 0;

    carrinho.forEach(item => {
        lista.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
        soma += item.preco;
    });

    total.innerHTML = "Total: R$ " + soma.toFixed(2);
}

function irPagamento() {
    window.location.hash = "#pagamento";
}

function finalizarCompra() {
    alert("Compra finalizada! Obrigado por comprar conosco!");
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
}

atualizarCarrinho();

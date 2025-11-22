const produtos = [
    {nome: "Real Madrid - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-20252026-d1bc7f4bca93bf73d817459593241738-640-0.webp", descricao: ""},
    {nome: "Barcelona - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-01-b90c1e0d94693c8fc117449291867995-1024-1024.webp", descricao: ""},
    {nome: "Bayern de Munique - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-home1-f75f3e793a2e80e49217473425625573-640-0.webp", descricao: ""},
    {nome: "Liverpool - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/005/025/117/products/img_36472-a4142d07a22fb3df3b17552822772576-480-0.webp", descricao: ""},
    {nome: "Chelsea - home 25/26", preco: 389, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HT-fvGmFUo_kLksorvkUAMkhtajF0GuwBw&s", descricao: ""},
    {nome: "Manchester City - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-home1-07f3d715f6c1cc502417428529708354-1024-1024.webp", descricao: ""},
    {nome: "Machester United - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-home1-279a6a673138cbfb0117473395212583-1024-1024.webp", descricao: ""},
    {nome: "Arsenal - home 25/56", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-home1-fe68ff6f2413d269fd17488941451597-1024-1024.webp", descricao: ""},
    {nome: "Tottenham - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/001/402/723/products/202506241258434-5c2179b3f52bafd3bd17508668255640-1024-1024.webp", descricao: ""},
    {nome: "PSG - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/004/822/518/products/9257602e-0e686d65c731912a5f17563116157518-480-0.webp", descricao: ""},
    {nome: "Borussia Dortmund - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/001/402/723/products/c6578041-f11228a25c841e553517437833869611-1024-1024.webp", descricao: ""},
    {nome: "Juventus - home 25/26", preco: 389, img: "https://lojadoartilheiro.com/cdn/shop/files/2526-Juventus-Home-S-4XL-8_800x.webp?v=1744748250", descricao: ""},
    {nome: "Internazionale - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-home1-5641df6984c033177817422428119573-1024-1024.webp", descricao: ""},
    {nome: "Milan - home 25/26", preco: 389, img: "https://acdn-us.mitiendanube.com/stores/005/997/898/products/milan-1-9dc882feb119c18d5a17436314695943-1024-1024.jpeg", descricao: ""},
    {nome: "Relógio Digital", preco: 90, img: "https://via.placeholder.com/300x200", descricao: ""},
    {nome: "Relógio Digital", preco: 90, img: "https://via.placeholder.com/300x200", descricao: ""},
    {nome: "Mouse Gamer", preco: 80, img: "https://via.placeholder.com/300x200", descricao: "."}
];

const lista = document.getElementById("produtos");

function mostrarProdutos(listaProdutos) {
    lista.innerHTML = "";
    listaProdutos.forEach(p => {
        lista.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <h3>${p.nome}</h3>
                <p class="preco">R$ ${p.preco}</p>
                <p>${p.descricao}</p>
            </div>
        `;
    });
}

mostrarProdutos(produtos);

document.getElementById("pesquisa").addEventListener("keyup", () => {
    const texto = document.getElementById("pesquisa").value.toLowerCase();
    const filtrado = produtos.filter(p =>
        p.nome.toLowerCase().includes(texto)
    );
    mostrarProdutos(filtrado);
});

function filtrar() {
    const min = document.getElementById("min").value;
    const max = document.getElementById("max").value;

    const filtrado = produtos.filter(p =>
        (!min || p.preco >= min) && (!max || p.preco <= max)
    );

    mostrarProdutos(filtrado);
}

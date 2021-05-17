const comprar = document.getElementById("botonProducto");
const stock = document.getElementById("stock");

comprar.addEventListener("click", function(e){
    stock.style.visibility = "visible";
});

console.log(stock);
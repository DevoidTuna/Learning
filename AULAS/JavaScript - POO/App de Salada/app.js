import modificador from './modificador.js'
import ingredientes from './ingredientes.js'
let containerIngredientes = document.getElementById("container-ingredientes")
modificador.capitalizarObj(ingredientes, 'nome')
let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')

for(let ingrediente of ingredientesOrdenados) {
    let textoHTML = `
    <div class="ingrediente">
        <img src="./img/${ingrediente.img}">
        <p class="nome-ingrediente">${ingrediente.nome}</p>
    </div>
    `
    containerIngredientes.innerHTML += textoHTML + '\n'
}
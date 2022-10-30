const categoriasElement = document.querySelector('#categorias');
const resultadoContainer = document.querySelector('#resultado');
const modal = new bootstrap.Modal('#modal', {});
const favoritosDiv = document.querySelector('.favoritos')

listeners();
function listeners(){
    if(categoriasElement){
        document.addEventListener('DOMContentLoaded', initApp);
        categoriasElement.addEventListener('change', seleccionarCategoria);
    }

    if(favoritosDiv){
        document.addEventListener('DOMContentLoaded', obtenerFavoritos);
    }
}

async function initApp(){
    try {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const result = await fetch(url);
        const response = await result.json();
        mostrarCategorias(response.categories);
    } catch (error) {
        console.log(error);
    }
}

function mostrarCategorias(categoria = []){
    categoria.forEach(categoria => {
        const {strCategory} = categoria;
        const option = document.createElement('option');
        option.value = strCategory;
        option.textContent = strCategory;
        categoriasElement.appendChild(option)
    });
}

async function seleccionarCategoria(e){
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

    try {
        const result = await fetch(url);
        const response = await result.json();
        mostrarSeleccion(response.meals);
    } catch (error) {
        console.log(error);
    }
}

function mostrarSeleccion(seleccion = []){
    // limpia y actualiza el HTML
    limpiarHTML(resultadoContainer); 

    const heading = document.createElement('h2');
    heading.classList.add('text-center', 'text-black', 'my-5');
    heading.textContent = seleccion.length ? 'Resultados' : 'No hay resultados';
    resultadoContainer.appendChild(heading);

    seleccion.forEach(plato => {
        const {idMeal, strMeal, strMealThumb} = plato;

        // Contenedor principal de la seleccion
        const contenedorDiv = document.createElement('div');
        contenedorDiv.classList.add('col-md-4');

        // Contenedor card de recetas
        const recetaCard = document.createElement('div');
        recetaCard.classList.add('card', 'mt-4');
        
        // Creacion de imagen de la receta
        const recetaImagen = document.createElement('img');
        recetaImagen.classList.add('card-img-top');
        recetaImagen.src = strMealThumb ?? plato.image;
        recetaImagen.alt = `imagen de receta ${strMeal ?? plato.foodTitle}`

        const recetaBody = document.createElement('div');
        recetaBody.classList.add('card-body');
        recetaBody.id = idMeal;

        const recetaHeading = document.createElement('h3');
        recetaHeading.classList.add('card-title', 'mb-3');
        recetaHeading.textContent = strMeal ?? plato.foodTitle;

        const recetaBtn = document.createElement('button');
        recetaBtn.classList.add('btn', 'btn-danger', 'w-100');
        recetaBtn.textContent = 'Ver receta';

        recetaBtn.onclick = () => {
            seleccionarReceta(idMeal ?? plato.id);
            console.log('click de receta');
        }

        // inyeccion de scripting en el HTML
        recetaBody.appendChild(recetaHeading);
        recetaBody.appendChild(recetaBtn);

        recetaCard.appendChild(recetaImagen);
        recetaCard.appendChild(recetaBody);

        contenedorDiv.appendChild(recetaCard);
        resultadoContainer.appendChild(contenedorDiv);
    })
}

async function seleccionarReceta(id){
    try {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const result = await fetch(url);
        const response = await result.json();

        mostrarReceta(response.meals[0]);
    } catch (error) {
        console.log(error);
    }
}

function mostrarReceta(receta){
    const {idMeal, strMeal, strInstructions, strMealThumb} = receta;

    // selectores para añadir contenido  al modal
    const modalTitle = document.querySelector('#staticBackdropLabel');
    const modalBody = document.querySelector('.modal-body');
    const modalFooter = document.querySelector('.modal-footer');

    // limpia los botones que se repiten en el footer
    limpiarHTML(modalFooter);

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
        <img src="${strMealThumb}" class="img-fluid" alt="receta${strMeal}"/>
        <h3 class="my-3">Instrucciones:</h3>
        <p>${strInstructions}</p>
        <h3 class="my-3">Ingredientes e Cantidades:</h3>
    `;

    // creacion de elemento de lista de los ingredientes e cantidades
    const listGroup = document.createElement('ol');
    listGroup.classList.add('list-group');

    // itera la cantidad y los ingredientes de la receta
    for(let i = 1; i <= 20; i++){
        if(receta[`strIngredient${i}`]){
            const ingrediente = receta[`strIngredient${i}`];
            const cantidad = receta[`strMeasure${i}`];
            const ingredienteLi = document.createElement('li');
            ingredienteLi.classList.add('list-group-item');
            ingredienteLi.textContent = `ingrediente: ${ingrediente} - cantidad: ${cantidad}`;

            listGroup.appendChild(ingredienteLi);
        }
    }

    modalBody.appendChild(listGroup);

    // creacion de botones de guardar favoritos y cerrar
    const btnFavorite = document.createElement('button');
    const btnClose = document.createElement('button');

    btnFavorite.classList.add('btn', 'btn-danger', 'col');
    btnFavorite.textContent = existeStorage(idMeal) ? 'Eliminar favorito' : 'Guardar favorito';
    
    // localstorage
    btnFavorite.onclick = () => {
        if(existeStorage(idMeal)){
            eliminarFavorito(idMeal);
            mostrarToast('Se elimino de favoritos');
            btnFavorite.textContent = 'Guardar favorito';
            return;
        }

        agregarFavorito({
            id: idMeal,
            foodTitle: strMeal,
            image: strMealThumb
        })

        btnFavorite.textContent = 'Eliminar favorito';
        mostrarToast('Se agrego a favoritos');
    }

    btnClose.classList.add('btn', 'btn-secondary', 'col');
    btnClose.textContent = 'Cerrar';
    btnClose.onclick = () => {
        modal.hide();
    }

    modalFooter.appendChild(btnFavorite);
    modalFooter.appendChild(btnClose);

    // mostrar modal
    modal.show();
}

function agregarFavorito(favorito){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    localStorage.setItem('favoritos', JSON.stringify([...favoritos, favorito]));
}

function eliminarFavorito(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);

    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
}

function existeStorage(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    return favoritos.some(favorito => favorito.id === id);
}

function mostrarToast(mensaje){
    const toastDiv = document.querySelector('.toast');
    const toastBody = document.querySelector('.toast-body');
    const toast = new bootstrap.Toast(toastDiv);

    toastBody.textContent = mensaje;

    toast.show();
}

function obtenerFavoritos(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    
    if(favoritos.length){
        mostrarSeleccion(favoritos);
        return;
    }

    const noFavoritos = document.createElement('p');
    noFavoritos.textContent = 'No hay favoritos aún';
    noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
    favoritosDiv.appendChild(noFavoritos);
}

function limpiarHTML(selector){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}
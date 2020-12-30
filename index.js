document.addEventListener("DOMContentLoaded", function(){
    fetchIngredients()
})

function fetchIngredients(){
    fetch("http://localhost:3000/ingredients")
    .then(response => response.json())
    .then(ingredients => {
        ingredients.forEach(ingredient => showIngredient(ingredient))
    })
}

function showIngredient(ingredientData){
    const smoothieDiv = document.querySelector(".smoothies")
    const header = document.createElement("h1")
    header.innerText = ingredientData.name
    smoothieDiv.append(header)
}
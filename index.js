document.addEventListener("DOMContentLoaded", function(){
    fetchIngredients()
    fetchPreMadeSmoothies()
})


////// DATA FETCHES //////
function fetchIngredients(){
    fetch("http://localhost:3000/ingredients")
    .then(response => response.json())
    .then(ingredients => {
        ingredients.forEach(ingredient => showIngredient(ingredient))
    })
}
                
function fetchPreMadeSmoothies(){
    fetch("http://localhost:3000/smoothies")
    .then(response => response.json())
    .then(smoothies => {
        smoothies.forEach(smoothie => showSmoothie(smoothie))
    })
}



/////// "SHOW" FUNCTIONS
function showIngredient(ingredientData){
    const smoothieDiv = document.querySelector(".smoothies")
    const header = document.createElement("h1")
    header.innerText = ingredientData.name
    const image = document.createElement("img")
    image.src = ingredientData.image

    smoothieDiv.append(header, image)
    
    
}




function showSmoothie(smoothieData){
   //console.log(smoothieData)
    const preMadeSmoothieDiv = document.querySelector(".house-favorties")
    const header = document.createElement("h1")
    header.innerText = smoothieData.name
    preMadeSmoothieDiv.append(header)




}
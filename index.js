document.addEventListener("DOMContentLoaded", function(){
    fetchIngredients()
    fetchFavSmoothies()
})
let nameForm = document.querySelector(".name-form")
////// DATA FETCHES //////
function fetchIngredients(){
    fetch("http://localhost:3000/ingredients")
    .then(response => response.json())
    .then(ingredients => {
        ingredients.forEach(ingredient => showIngredient(ingredient))
    })
}
function fetchFavSmoothies(){
    fetch("http://localhost:3000/smoothies")
    .then(response => response.json())
    .then(smoothies => {
        smoothies.forEach(smoothie => showSmoothie(smoothie))
    })
}
/////// "SHOW" FUNCTION
function showIngredient(ingredientData){
    //// BASE///
    if (ingredientData.category == "base"){
    const baseDiv = document.querySelector(".base")
    const header = document.createElement("p")
    header.innerText = ingredientData.name
    const image = document.createElement("img")
    image.setAttribute("id", ingredientData.id)
    image.setAttribute("name", ingredientData.name)
    image.src = ingredientData.photo
    baseDiv.append(image, header)
    image.addEventListener("click", (e) => {
        moveIngredient(image, e)
    })}
    ///// PLANT //////
    if (ingredientData.category == "plant"){
    const plantDiv = document.querySelector(".plant")
    const plantHeader = document.createElement("p")
    plantHeader.innerText = ingredientData.name
    const image = document.createElement("img")
    image.src = ingredientData.photo
    plantDiv.append(image, plantHeader)
    image.addEventListener("click", (e) => {
        selectPlantIngredient(image, e)
    })
    }
        /////// TOPPINGS //////
    if (ingredientData.category == "toppings"){
        const toppingsDiv = document.querySelector(".toppings")
        const toppingsHeader = document.createElement("p")
        toppingsHeader.innerText = ingredientData.name
        const image = document.createElement("img")
        image.src = ingredientData.photo
        toppingsDiv.append(image, toppingsHeader)
        image.addEventListener("click", (e) => {
            selectToppingIngredient(image, e)
        })
    }
}
///////// SELECT BASE /////
function moveIngredient(image, e){
    const ingredientName = e.target.nextSibling
    ingredientName.style.fontWeight = "bolder";
  const ingredientImage = document.querySelector("#ingredient-image")
  ingredientImage.append(image) //image MOVES to specified div
  ingredientImage.src = image.src
   const ingredientDiv= document.querySelector(".ingredient-event")
   const ingredientDivImg = document.createElement("img")
   ingredientDivImg.src = image.src
    ingredientDiv.append(ingredientDivImg)
}
////// SELECT PLANT ///////
function selectPlantIngredient(image, e){
    const plantName = e.target.nextSibling
    plantName.style.fontWeight = "bolder";
    const plantImage = document.querySelector("#ingredient-image")
    plantImage.append(image) //image MOVES to specified div
    plantImage.src = image.src
     const plantIngredientDiv= document.querySelector(".ingredient-event")
     const plantIngredientImg = document.createElement("img")
     plantIngredientImg.src = image.src
     plantIngredientDiv.append(plantIngredientImg)
}
////// SELECT TOPPINGS ////
function selectToppingIngredient(image, e){
    const toppingName = e.target.nextSibling
    toppingName.style.fontWeight = "bolder";
    const toppingImage = document.querySelector("#ingredient-image")
    toppingImage.append(image) //image MOVES to specified div
    toppingImage.src = image.src
     const toppingIngredientDiv= document.querySelector(".ingredient-event")
     const toppingIngredientImg = document.createElement("img")
     toppingIngredientImg.src = image.src
     toppingIngredientDiv.append(toppingIngredientImg)
}
////// FAVORITE SMOOTHIES ///////
function showSmoothie(smoothieData){
    if(smoothieData.favorite == true){
     const preMadeSmoothieDiv = document.querySelector(".house-favorites")
     const header = document.createElement("p")
     header.innerText = smoothieData.name
     const smoothieImage = document.createElement("img")
     smoothieImage.src = smoothieData.photo
     preMadeSmoothieDiv.append(header, smoothieImage)
     smoothieImage.addEventListener("click",(e) => {
         selectBowl(smoothieImage, e)
     })
 }}
function selectBowl(smoothieImage, e){
    const bowlName = e.target.previousSibling
    bowlName.style.fontWeight = "bolder";
    const bowlImage = document.querySelector("#ingredient-image")
    bowlImage.append(smoothieImage) //image MOVES to specified div
    bowlImage.src = smoothieImage.src
     const bowlIngredientDiv= document.querySelector(".ingredient-event")
     const bowlIngredientImg = document.createElement("img")
     bowlIngredientImg.src = smoothieImage.src
     bowlIngredientDiv.append(bowlIngredientImg)
}
 /////NAME FORM /////
nameForm.addEventListener("submit", event => {
    event.preventDefault()
    let userName = event.target[0].value
    let smoothieName = event.target[1].value
    document.querySelector(".name-form").reset();
fetch("http://localhost:3000/smoothies", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            
        smoothie:{
            name: smoothieName, username: userName
        }})
    })
})
    //////// SIZE BUTTONS ///////
// let smallButton = document.querySelector(".small-box")
// smallButton.addEventListener("click", event => {
// event.preventDefault()
// console.log(event.target)
// fetch(`http://localhost:3000/smoothies/${dancerID}`,{
//         method: "PATCH",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             likes: likeCount
//         })
//     })
// })
















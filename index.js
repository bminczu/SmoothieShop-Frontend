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



/////// "SHOW" FUNCTIONS
function showIngredient(ingredientData){
    const smoothieDiv = document.querySelector(".smoothies")
    const header = document.createElement("p")
    header.innerText = ingredientData.name
    const image = document.createElement("img")
    image.src = ingredientData.photo
    smoothieDiv.append(header, image)
}



////// FAVORITE SMOOTHIES ///////
function showSmoothie(smoothieData){
    if(smoothieData.favorite = true){
     const preMadeSmoothieDiv = document.querySelector(".house-favorites")
     const header = document.createElement("p")
     header.innerText = smoothieData.name
     preMadeSmoothieDiv.append(header)
 }}


///// CUSTOMER/SMOOTHIE NAME FORM //////
nameForm.addEventListener("submit", event => {
    event.preventDefault()
    let userName = event.target[0].value
    let smoothieName = event.target[1].value
    document.querySelector(".name-form").reset();
    ///nameForm.dataset.id =  smoothieData.id

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
let smallButton = document.querySelector(".small-box")
smallButton.addEventListener("click", event => {
event.preventDefault()
console.log(event.target)

// fetch(`http://localhost:3000/smoothies/${dancerID}`,{
//         method: "PATCH",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             likes: likeCount
//         })
//     })
})



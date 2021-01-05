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
    image.src = ingredientData.photo
    console.log(ingredientData)
    smoothieDiv.append(header, image)
    
    
}




function showSmoothie(smoothieData){
   //console.log(smoothieData)
    const preMadeSmoothieDiv = document.querySelector(".house-favorites")
    const header = document.createElement("h1")
    header.innerText = smoothieData.name
    preMadeSmoothieDiv.append(header)




}
///// CUSTOMER/SMOOTHIE NAME FORM //////
// form.addEventListener("submit", event=> {
//     event.preventDefault()
//     let input = event.target[0].value
//     let commentLI = document.querySelector("li")
//     commentLI.textContent = input
//     let commentUL = document.querySelector(".comments")
//     commentUL.append(commentLI)

//     let likeSpan = document.querySelector("span")
//     let postId = parseInt(likeSpan.dataset.id, 10) 
   
//     fetch("http://localhost:3000/comments", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             imageId: postId, content: input
//         })
//     })
   
// })
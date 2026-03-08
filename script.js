var btn = document.getElementById('btn')
var moeda = document.getElementById('moeda')
var lado = document.getElementById('lado')

function CaraCoroa (){
    let random = Math.random() 
    const result = random < 0.5 ? "Heads" : "Tails";
    if (result == "Heads"){
        moeda.src = "./assets/heads.svg"
        lado.innerHTML = `Heads`
    } else {
        moeda.src = "./assets/tails.svg"
        lado.innerHTML = `Tails`
    }
    // lado.innerHTML += `<br/><span>${random}</span>`
}
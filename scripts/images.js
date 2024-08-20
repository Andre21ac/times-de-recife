let imgSanta = "images/escudo-santaCruz.png"
let imgSport = "images/escudo-sport1.png"
let imgNautico = "images/escudo-nautico.png"

let cont = 0


function trocarEscudo(){
    /*
    document.getElementById("escudo").src = imgSport
    let aux = imgSport
    imgSport = imgSanta
    imgSanta = aux
    */
   cont++
   
    if (cont === 3)
    {
        cont = 0
    }

    if (cont === 1)
    {
        document.getElementById("escudo").src = imgSport
        document.getElementById("legenda").textContent = "Sport Club Do Recife"
    }
    if (cont === 2)
    {
        document.getElementById("escudo").src = imgNautico
        document.getElementById("legenda").textContent = "Clube Náutico Capibaribe"
    }
    if (cont === 0)
    {
        document.getElementById("escudo").src = imgSanta
        document.getElementById("legenda").textContent = "Santa Cruz Futebol Clube"
    }

    console.log(cont)

}

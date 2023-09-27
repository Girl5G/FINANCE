let formulaire= document.querySelector('#btn')

console.log("ertyuio");

formulaire.addEventListener('click',() =>{
    let tabUser = JSON.parse(localStorage.getItem("tableau")) || []
    let Nom= document.querySelector("#nom").value
    let Quantite = document.querySelector("#quantite").value;
    let Prix= document.querySelector("#prix").value
    let info= document.querySelector("#info").value
console.log("bhbhbhbh");

    let user ={
        id: tabUser.length+1,
        nom: Nom,
        quantite: Quantite,
        prix: Prix,
        info: info
    }
    tabUser.push(user)
    console.log(tabUser)
    localStorage.setItem("tableau", JSON.stringify(tabUser))
    window.location.href = "./tableau.html"
    
})
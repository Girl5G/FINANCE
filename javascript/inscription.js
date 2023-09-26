let form = document.querySelector("#button")
form.addEventListener('click',() =>{
    let tabUser = JSON.parse(localStorage.getItem("userList")) || []
    let nom = document.querySelector("#nom").value
    let prenom = document.querySelector("#prenom").value
    let email = document.querySelector(".main_input").value;
    let passe = document.querySelector("#password").value
    let user ={
        nom: nom,
        prenom: prenom,
        email:email,
        motdepasse: passe ,
    }
    tabUser.push(user)
    localStorage.setItem("userList",JSON.stringify(tabUser))
    window.location.href = "./connexion.html"
})
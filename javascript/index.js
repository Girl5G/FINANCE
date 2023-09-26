
function logout() {
    window.location.href = "./connexion.html"
    localStorage.removeItem("session")
    console.log("logout")
}
let infoUSer = JSON.parse(localStorage.getItem("session"))
let nomCon = document.querySelector('.nomCon')
console.log(infoUSer.prenom)
nomCon.innerText = infoUSer.prenom
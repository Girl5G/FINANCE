let form = document.querySelector("form")
form.addEventListener("submit",(e) => {
    e.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("userList"))
    let resultUser;
    tabUser.forEach(nono => {
        if(nono.email === document.querySelector("#email").value && 
            nono.motdepasse === document.querySelector("#passe").value){
            resultUser = nono
            console.log(nono)
        }
    })
    if (typeof resultUser != "undefined") {
        alert("corect")
        localStorage.setItem("session",JSON.stringify(resultUser))
        window.location.href = "./index.html"
    } else{
        alert("incorrect")
        window.location.reload()
    }
})
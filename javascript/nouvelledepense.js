let form = document.querySelector("#btn")
let formulaire= document.querySelector('.formulaire')





formulaire.addEventListener("submit",(e)=>{
    e.preventDefault()
})



form.addEventListener('click',() =>{
    let tabUser = JSON.parse(localStorage.getItem("depense")) || []
    let Intitule= document.querySelector("#nom").value
    let Valeurdepensee = document.querySelector("#nombre").value;
    let detail = document.querySelector("#detail").value
    let user ={
        id: tabUser.length+1,
        Intitule: Intitule,
        valeurdedepensees: Valeurdepensee,
        detail: detail
    }
    tabUser.push(user)
    console.log(tabUser)
    localStorage.setItem("depense",JSON.stringify(tabUser))
    window.location.href = "./depense.html"
    
})
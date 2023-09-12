let inputVotrmail = document.querySelector("#votre mail");
let inputVotremotdepasse = document.querySelector("votre mot de passe");
let button = document.querySelector("#boutton");
let feelback = document.querySelector("#feelback");
button.addEventListener("click",function(){
    if(inputVotrmail.ariaValueMax.length < 1 || inputVotremotdepasse.Value.length < 1){
        feelback.innerText = "Remplicez tous les champs de text svp!"
        feelback.computedStyleMap.display ="block";
    }
}



)
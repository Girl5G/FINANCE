const btn_soumettre = document.getElementById("btn-creer");
btn_soumettre.addEventListener("click", ajouterArticle);

function ajouterArticle(event){
    event.preventDefault()
    let option=true;
    const formulaire = event.target.closest("form");
    formulaire.querySelectorAll("input:required").forEach(input=>{
        if(!input.value){
            option=false;
            input.focus()
        }
    })
    if(!option){
        alert("tout les sont obligatoire")
        return
    }
    const article=formulaire.article.value;
    const quantite=formulaire.quantite.value;
    const prix=formulaire.prix.value;
    const detail=formulaire.detail.value;
    const achat={
        article:article,
        quantite:quantite,
        prix:prix,
        detail:detail
    };
    const dataDepenses = localStorage.depenses;
    console.log(dataDepenses)
    if(!dataDepenses){
        achat.id=1;
        localStorage.setItem("depenses", JSON.stringify([achat]))
    }else{
        const converseData=JSON.parse(dataDepenses);
        console.log(Array.isArray(converseData))
        achat.id=converseData.length+1;
        console.log(converseData.push(achat))
        localStorage.setItem("depenses", JSON.stringify(converseData.push(achat)))
    }




}
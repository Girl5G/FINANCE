


function afficher(){
  const dataLocalStorage = localStorage.modifier;
  const data=JSON.parse(dataLocalStorage);
  

  const formulaire=document.getElementById("formulaire");
  const nom=formulaire.nom;
  const quantite=formulaire.quantite;
  const prix = formulaire.prix;
  const infos=formulaire.infos;
}

afficher(90)




//modification
function findById(){
  const globalData = localStorage.modifier;
  if(globalData){
    const indice  =Number(window.location.href.split("#")[1]);
    const element = JSON.parse(globalData)[indice];
    const nom=document.getElementById("nom");
    const quantite=document.getElementById("quantite");
    const prix=document.getElementById("prix");
    const infos=document.getElementById("infos");

    nom.value = element.Intitule;
    quantite.value = element.valeurdedepensees;
    infos.value = element.detail;
    nom.value = element.Intitule;

    console.log(element)
  }
}
findById()
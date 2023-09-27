// function afficher(){
//     const dataLocalStorage = localStorage.entree;
//     const data=JSON.parse(dataLocalStorage.getItem("entree"));
//     console.log(data);
//     const tbody = document.querySelector("tbody")
//     data.forEach((element, indice) => {
//         console.log(element)
//         tbody.innerHTML+=`
//         <tr class="${indice%2===0 ? 'fondBleue': 'fondGris'}" id="ligne-${indice}">
//             <td>${indice}</td>
//             <td>${element.nom}</td>
//             <td>${indice}</td>
//             <td>${indice}</td>
//             <td>${indice}</td>
//             <td>
//                 <a href="./modifier.html#${indice}"><span class="modifier">Modifier</span></a>
//                 <a href="./supprimer.html#${indice}"><span class="supprimer">Supprimer</span></a>
//             </td> 
//         </tr>`
//     });
//   }

//   afficher(90)

function affichTout() {

    let tableau = JSON.parse(localStorage.getItem("tableau"));
    let tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    tableau.forEach((element) => {
     const row = document.createElement("tr");
         row.className = "fondBleue";

        row.innerHTML = `
                <td>${element.id}</td>
                 <td>${element.nom}</td>
                <td>${element.quantite}</td>
                <td>${element.prix}</td>
                <td>${element.info}</td>
                <td>
                  <a><span class="modifier" onclick="modifier(${element.id})">Modifier</span></a>
               <a><span class="supprimer" onclick="supprimer(${element.id})">Supprimer</span></a>
                 </td>
         `;

       tbody.appendChild(row);
     });
}
function supprimer(id) {
    let data = JSON.parse(localStorage.getItem("tableau"));
    data = data.filter((rec) => rec.id !== id);
    localStorage.setItem("tableau", JSON.stringify(data));
    affichTout();
}

function modifier(id) {
    // Récupérer l'élément à modifier
    let tableau = JSON.parse(localStorage.getItem("tableau"));
    let element = tableau.find((rec) => rec.id === id);

    if (element) {
        // Remplir le formulaire avec les données actuelles de l'élément
        document.getElementById("nom").value = element.nom;
        document.getElementById("quantite").value = element.quantite;
        document.getElementById("prix").value = element.prix;
        document.getElementById("info").value = element.info;

        // Afficher le popup
        const popup = document.getElementById("popup");
        popup.style.display = "block";

        // Ajouter un gestionnaire d'événements au formulaire de modification
        const modifierForm = document.getElementById("modifierForm");
        modifierForm.onsubmit = function (e) {
            e.preventDefault();

            // Mettre à jour les données de l'élément
            element.nom = document.getElementById("nom").value;
            element.quantite = document.getElementById("quantite").value;
            element.prix = document.getElementById("prix").value;
            element.info = document.getElementById("info").value;

            // Mettre à jour les données dans le localStorage
            localStorage.setItem("tableau", JSON.stringify(tableau));

            // Cacher le popup
            popup.style.display = "none";

            // Rafraîchir la liste des éléments
            affichTout();
        };
    }
}

// Appel initial pour afficher les données
affichTout()

// Votre code JavaScript
function affichTout() {
  let depense = JSON.parse(localStorage.getItem("depense"));
  let tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  depense.forEach((element) => {
    const row = document.createElement("tr");
    row.className = "fondBleue";

    row.innerHTML = `
              <td>${element.id}</td>
              <td>${element.Intitule}</td>
              <td>${element.valeurdedepensees}</td>
              <td>${element.detail}</td>
              <td>
                <a><span class="modifier" onclick="modifier(${element.id})">Modifier</span></a>
                <a><span class="supprimer" onclick="supprimer(${element.id})">Supprimer</span></a>
              </td>
            `;

    tbody.appendChild(row);
  });
}

function supprimer(id) {
  let data = JSON.parse(localStorage.getItem("depense"));
  data = data.filter((rec) => rec.id !== id);
  localStorage.setItem("depense", JSON.stringify(data));
  affichTout();
}

function modifier(id) {
  // Récupérer l'élément à modifier
  let depense = JSON.parse(localStorage.getItem("depense"));
  let element = depense.find((rec) => rec.id === id);

  if (element) {
    // Remplir le formulaire avec les données actuelles de l'élément
    document.getElementById("intitule").value = element.Intitule;
    document.getElementById("valeur").value = element.valeurdedepensees;
    document.getElementById("detail").value = element.detail;

    // Afficher le popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Ajouter un gestionnaire d'événements au formulaire de modification
    const modifierForm = document.getElementById("modifierForm");
    modifierForm.onsubmit = function (e) {
      e.preventDefault();

      // Mettre à jour les données de l'élément
      element.Intitule = document.getElementById("intitule").value;
      element.valeurdedepensees = document.getElementById("valeur").value;
      element.detail = document.getElementById("detail").value;

      // Mettre à jour les données dans le localStorage
      localStorage.setItem("depense", JSON.stringify(depense));

      // Cacher le popup
      popup.style.display = "none";

      // Rafraîchir la liste des éléments
      affichTout();
    };
  }
}

// Appel initial pour afficher les données
affichTout();

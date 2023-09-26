function afficher(){
    const dataLocalStorage = localStorage.entree;
    const data=JSON.parse(dataLocalStorage.getItem("entree"));
    console.log(data);
    const tbody = document.querySelector("tbody")
    data.forEach((element, indice) => {
        console.log(element)
        tbody.innerHTML+=`
        <tr class="${indice%2===0 ? 'fondBleue': 'fondGris'}" id="ligne-${indice}">
            <td>${indice}</td>
            <td>${element.nom}</td>
            <td>${indice}</td>
            <td>${indice}</td>
            <td>${indice}</td>
            <td>
                <a href="./modifier.html#${indice}"><span class="modifier">Modifier</span></a>
                <a href="./supprimer.html#${indice}"><span class="supprimer">Supprimer</span></a>
            </td> 
        </tr>`
    });
  }
  
  afficher(90)
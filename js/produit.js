function listProduct() {
    var traditionnelle = JSON.parse(localStorage.getItem('Traditionnelle')) || [];
    const traditionnelleList = document.getElementById('traditionnelle')
    var Salades = JSON.parse(localStorage.getItem('Salades')) || [];
    const SaladesList = document.getElementById('salades')
    var Patisserie = JSON.parse(localStorage.getItem('Patisserie')) || [];
    const PatisserieList = document.getElementById('Patisserie')

    for (let i = 0; i < Salades.length; i++) {
        SaladesList.innerHTML += `<div class="card">
       <img src="${Salades[i].photo}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title" style="color: white;
            font-size: xx-large;background-color: red;" id="produit1">${Salades[i].nom}</h5>
           <p>${Salades[i].description}</p>
           <p class="card-text"> <strong> Ingrédients :</strong><br>
           ${Salades[i].ingrédient} </p>

           <p><strong>Préparation:</strong> <br>
           ${Salades[i].préparation}
               </p>
               <p><strong>${Salades[i].prix}</strong></p>

           <button  class="btn btn-info" style="font-size: large;" onclick="saveIndex(${i},'${Salades[i].type}')">Update</button>
           <button href="#" class="btn btn-danger" style="font-size: large;"  onclick="Delete(${i}, '${Salades[i].type}')">Delete</button>
       </div>

   </div>`

    }


    for (let i = 0; i < traditionnelle.length; i++) {
        traditionnelleList.innerHTML += `<div class="card">
       <img src="${traditionnelle[i].photo}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title" style="color: white;
            font-size: xx-large;background-color: red;" id="produit1">${traditionnelle[i].nom}</h5>
           <p>${traditionnelle[i].description}</p>
           <p class="card-text"> <strong> Ingrédients :</strong><br>
           ${traditionnelle[i].ingrédient} </p>

           <p><strong>Préparation:</strong> <br>
           ${traditionnelle[i].préparation}
               </p>
               <p><strong> ${traditionnelle[i].prix}</strong></p>

           <button class="btn btn-info" style="font-size: large;" onclick="saveIndex(${i},'${traditionnelle[i].type}')" >Update</button>
           <button href="#" class="btn btn-danger" style="font-size: large;"  onclick="Delete(${i}, '${traditionnelle[i].type}')">Delete</button>
       </div>

   </div>`

    }

    for (let i = 0; i < Patisserie.length; i++) {
        PatisserieList.innerHTML += `<div class="card">
       <img src="${Patisserie[i].photo}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title" style="color: white;
            font-size: xx-large;background-color: red;" id="produit1">${Patisserie[i].nom}</h5>
           <p>${Patisserie[i].description}</p>
           <p class="card-text"> <strong> Ingrédients :</strong><br>
           ${Patisserie[i].ingrédient} </p>

           <p><strong>Préparation:</strong> <br>
           ${Patisserie[i].préparation}
               </p>
               <p><strong>${Patisserie[i].prix}</strong></p>

           <button href="#" class="btn btn-info" style="font-size: large;" onclick="saveIndex(${i}, '${Patisserie[i].type}')">Update</button>
           <button href="#" class="btn btn-danger" style="font-size: large;" onclick="Delete(${i}, '${Patisserie[i].type}')">Delete</button>
       </div>
   </div>`
    }
}
function saveIndex(i, type) {
    localStorage.setItem('updateIndex', i)
    localStorage.setItem('updateType', type)
    window.open('update.html')
}

function Delete(i, type) {
    var produits = JSON.parse(localStorage.getItem(`${type}`)) || [];
    produits.splice(i, 1)
    localStorage.setItem(`${type}`, JSON.stringify(produits))
    window.location.reload()
}
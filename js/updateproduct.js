const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function updateProduct() {

    var nom = document.getElementById('nom')
    var description = document.getElementById('description')
    var ingrédient = document.getElementById('ingrédient')
    var préparation = document.getElementById('préparation')
    var prix = document.getElementById('prix')
    var photo = document.getElementById('photo')
    var genre = document.getElementById('type')
    var has_error = false;

    if (nom.value != '') {
        nom.classList.add('is-valid');
        nom.classList.remove('is-invalid')
        nom_valid.innerText = ''
    } else {
        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid');
        nom_valid.innerText = 'le nom est obligatoire';
        has_error = true;

    }

    if (description.value != '') {
        description.classList.add('is-valid');
        description.classList.remove('is-invalid')
        description_valid.innerText = ''
    } else {
        description.classList.remove('is-valid')
        description.classList.add('is-invalid');
        description_valid.innerText = 'la description est obligatoire';
        has_error = true;

    }

    if (ingrédient.value != '') {
        ingrédient.classList.add('is-valid');
        ingrédient.classList.remove('is-invalid')
        ingrédient_valid.innerText = ''
    } else {
        ingrédient.classList.remove('is-valid')
        ingrédient.classList.add('is-invalid');
        ingrédient_valid.innerText = 'les ingredients sont obligatoire';
        has_error = true;

    }

    if (préparation.value != '') {
        préparation.classList.add('is-valid');
        préparation.classList.remove('is-invalid')
        préparation_valid.innerText = ''
    } else {
        préparation.classList.remove('is-valid')
        préparation.classList.add('is-invalid');
        préparation_valid.innerText = 'la méthode de préparation est obligatoire';
        has_error = true;

    }
    if (prix.value != '') {
        prix.classList.add('is-valid');
        prix.classList.remove('is-invalid')
        prix_valid.innerText = ''
    } else {
        prix.classList.remove('is-valid')
        prix.classList.add('is-invalid');
        prix_valid.innerText = 'le prix est obligatoire';
        has_error = true;

    }
    let base64 = "";
    if (photo.files.length > 0) {
        const image = photo.files[0];
        base64 = await toBase64(image);
    }
    // if (photo.value != '') {
    //     photo.classList.add('is-valid');
    //     photo.classList.remove('is-invalid')
    //     photo_valid.innerText = ''
    // } else {
    //     photo.classList.remove('is-valid')
    //     photo.classList.add('is-invalid');
    //     photo_valid.innerText = 'la photo est obligatoire';
    //     has_error = true;

    // }

    if (has_error == false) {
        var type = localStorage.getItem('updateType') || '';
        var produits = JSON.parse(localStorage.getItem(`${type}`)) || [];
        var index = localStorage.getItem('updateIndex') || '';
        var produit = {
            photo: photo.value==='' ? produits[index].photo : base64,
            nom: nom.value,
            description: description.value,
            ingrédient: ingrédient.value,
            préparation: préparation.value,
            prix: prix.value,
            type: genre.value,
        }

        if (type === genre.value) {
            produits.splice(index, 1, produit)
            localStorage.setItem(`${type}`, JSON.stringify(produits))
        }else{
            produits.splice(index, 1)
            var targetStorage = JSON.parse(localStorage.getItem(`${genre.value}`)) || [];
            targetStorage.push(produit)
            localStorage.setItem(`${type}`,JSON.stringify(produits))
            localStorage.setItem(`${genre.value}`,JSON.stringify(targetStorage))
        }

        location.href ='produit.html'
    }

}

var update = document.getElementById('update');

update.addEventListener('click', () => {
    updateProduct()
})

function showData() {
    var type = localStorage.getItem('updateType') || '';
    var produits = JSON.parse(localStorage.getItem(`${type}`)) || [];
    var index = localStorage.getItem('updateIndex') || '';
    var produit = produits[index];

    var nom = document.getElementById('nom')
    nom.value = produit.nom
    var description = document.getElementById('description')
    description.value = produit.description
    var ingrédient = document.getElementById('ingrédient')
    ingrédient.value = produit.ingrédient
    var préparation = document.getElementById('préparation')
    préparation.value = produit.préparation
    var prix = document.getElementById('prix')
    prix.value = produit.prix
    var genre = document.getElementById('type')
    genre.value = produit.type
}  
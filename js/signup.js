/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'
 
            // Add icon
            iconEye.classList.add('ri-eye-line')
            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'
 
            // Remove icon
            iconEye.classList.remove('ri-eye-line')
            // Add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
 }
 
 showHiddenPass('input-pass','input-icon')


// Récupérer les éléments du formulaire
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.getElementById("input-pass");
const inscriptionBtn = document.querySelector(".login__button");

// Ajouter un gestionnaire d'événement pour le bouton d'inscription
inscriptionBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const nom = nomInput.value;
    const prenom = prenomInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Vérifier si les champs sont vides
    if (!nom || !prenom || !email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Créer un objet utilisateur
    const utilisateur = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password
    };

    // Enregistrer l'utilisateur dans le stockage local
    localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

    // Rediriger vers la page de connexion
    window.location.href = "../html/login.html";
});

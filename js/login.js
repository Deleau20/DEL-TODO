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
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.getElementById("input-pass");
const connexionBtn = document.querySelector(".login__button");

// Ajouter un gestionnaire d'événement pour le bouton de connexion
connexionBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const email = emailInput.value;
    const password = passwordInput.value;

    // Vérifier si les champs sont vides
    if (!email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Récupérer l'utilisateur enregistré dans le stockage local
    const utilisateurEnregistre = JSON.parse(localStorage.getItem("utilisateur"));

    // Vérifier si l'utilisateur existe et si les informations d'identification sont correctes
    if (utilisateurEnregistre && utilisateurEnregistre.email === email && utilisateurEnregistre.password === password) {
        alert("Connexion réussie !");
        // Rediriger vers une page d'accueil ou un tableau de bord
        window.location.href = "../html/home.html";
    } else {
        alert("Informations d'identification incorrectes. Veuillez réessayer.");
    }
});

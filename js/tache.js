document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Supprimer</button>
            `;
            taskList.appendChild(listItem);

            // Réinitialiser l'input
            taskInput.value = "";

            // Ajouter un gestionnaire d'événement pour supprimer la tâche
            const deleteBtn = listItem.querySelector(".delete");
            deleteBtn.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });

    // Pour supprimer une tâche existante
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            taskList.removeChild(event.target.parentElement);
        }
    });
});


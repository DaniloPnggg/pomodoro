
    const myBox = document.getElementById('myBox');
    const myButton = document.getElementById('myButton');
    let toggle = false;

    myBox.textContent = "Olha pra baixo";

    myButton.addEventListener('click', event => {
        if (toggle) {
            myBox.textContent = "Olha pra baixo";
            myBox.style.backgroundColor = "#00565F";
        } else {
            myBox.textContent = "Oiiiiiiiii 😎";
            myBox.style.backgroundColor = "#64c27b"
        }
        toggle = !toggle; // Alternar entre true e false para a próxima vez
    });
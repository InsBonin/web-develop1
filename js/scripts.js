const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("formDiv").style.display = "none";
    document.getElementById("preencha").style.display = "none";
    document.getElementById("preenchido").style.display = "block";
})
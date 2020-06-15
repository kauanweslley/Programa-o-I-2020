function mudarNome() {
    const h1 = document.getElementById("titulo")
    const input = document.getElementById("nome")
    if (input.value !== ""){
    h1.innerText = "Bem vindo, " + input.value
    } else {
    h1.innerText = "Bem vindo, estranho."
}

}
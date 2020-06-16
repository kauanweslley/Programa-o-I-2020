function alterarcor() {
    const cores = ["red", "green", "blue", "yellow", "purple", "black", "orange"]
    const corEscolhida = cores[Math.floor(Math.random() * 7)]
    document.body.style.background = corEscolhida
}
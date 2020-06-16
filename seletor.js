function alterarCor() {
    const red = document.getElementById('red').value,
        green = document.getElementById('green').value,
        blue = document.getElementById('blue').value

    document.getElementById("result").value = "(" + red + ", " + green + ", " + blue + ")"
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")"
}
alterarCor()
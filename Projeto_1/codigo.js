function confirmar() {
    var senha = document.getElementById("txtsen").value
    var senhaConfirmada = document.getElementById("txtsco").value
    if (senha != senhaConfirmada) {
        window.alert("Senha Incorreta")
        document.getElementById("txtsco").value = ""
        document.getElementById("txtsco").focus()
        return false
    }
}
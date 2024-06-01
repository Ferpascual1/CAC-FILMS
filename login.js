const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length <2){
        warning += 'El nombre no es valido <br>'
        entrar = true

    }
    if(password.value.length <6){
        warning += 'Password no es valido <br>'
        entrar = true

    }
    if (entrar){
        parrafo.innerHTML = warning
    }


})

const form = document.getElementById('form-valida')
const A = document.getElementById('campoA')
const B = document.getElementById('campoB')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    validacao()
})

function validacao() {
    const valorA = A.value
    const valorB = B.value
    const mensagemSucesso = `Validado com sucesso: ${valorB} é maior que ${valorA}`

    if(valorB <= valorA) {
        document.querySelector('.error-message').style.display = 'block'
        B.style.border = '1px solid red'
    } else {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        document.querySelector('.error-message').style.display = 'none'
        B.style.border = ''
        
        A.value = ''
        B.value = ''
    }
}

console.log(form)

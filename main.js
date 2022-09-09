
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

    if(valorA <= valorB) {
        A.style.border = '2px solid red'
    } else {
        alert('ok')
    }
}

console.log(form)

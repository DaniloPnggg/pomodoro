const form = document.getElementById(`orderForm`)

form.addEventListener(`submit`, function (ev) {
    ev.preventDefault()

    const name = document.querySelector(`input[name="name"]`).value
    const address = document.querySelector(`input[name="address"]`).value
    const breadType = document.querySelector(`select[name="breadType"]`).value
    const main = document.querySelector(`input[name="main"]`).value
    const observations = document.querySelector(`textarea[name="observations"]`).value

    let salad = ``
    document.querySelectorAll(`input[name="salad"]:checked`).forEach(function (item) {
        salad += ` - ${item.value}\n`
    }) // Vamos pegar o value de apenas o que estiver marcado

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations,
    })


    alert(`Pedido realizado!
    \nNome do cliente: ${name}
    \nEndereço: ${address}
    \nTipo de pão: ${breadType}
    \nMain: ${salad}
    \nObservations: ${observations}`)

}) // Botão submit
const cupones = document.querySelectorAll(".card.cupon .card-title")

cupones.forEach((cupon) => {
    cupon.addEventListener("click", (e) => {
        const codigoCupon = e.target.textContent

        fetch(`/api/validar-cupon?codigo=${codigoCupon}`)
        .then((data) => data.json())
        .then((result) => {
            const isValid = result.valid
            const card = document.querySelector(`#cupon-${codigoCupon}`)
            card.classList.remove("bg-danger", "bg-success")
            if(!isValid) {
                return card.classList.add("bg-danger")
            }

            return card.classList.add("bg-success")
        })
    })
})
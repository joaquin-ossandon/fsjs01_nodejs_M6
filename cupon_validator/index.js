const express = require("express");
const dayjs = require('dayjs');

const app = express();
const PORT = 3001;

const cupones = [
  { codigo: "VERANO2026", descuento: 20, expiracion: "2026-12-31", minimo: 0 },
  {
    codigo: "BLACKFRIDAY",
    descuento: 50,
    expiracion: "2024-11-29",
    minimo: 10000,
  },
  { codigo: "VIP100", descuento: 30, expiracion: "2027-01-01", minimo: 50000 },
];

app.get("/", (req, res) => {
  res.send("Holitas");
});

app.get('/api/validar-cupon', (req, res) => {
    const { codigo, totalcompra = 0 } = req.query // cliente envía info -> /validar-cupon?codigo=VERANO2026&totalcompra=40000
    
    const cuponEncontrado = cupones.find((cupon) => cupon.codigo === codigo)

    if(!cuponEncontrado) {
        return res.status(404).send("Cupón no encontrado")
    }

    const expirationDate = dayjs(cuponEncontrado.expiracion)
    const hoy = dayjs()

    if(expirationDate.isBefore(hoy)) {
        return res.status(498).send("Está caducado, no sea basura")
    }

    if(totalcompra < cuponEncontrado.minimo) {
        return res.status(422).send(`Necesitas tener un mínimo de: ${cuponEncontrado.minimo}`)
    }

    const totDesct = totalcompra * (cuponEncontrado.descuento/100)
    const totalConDescto = totalcompra - totDesct

    res.send(`Tu código de cupón ${cuponEncontrado.codigo} es válido. tu descuento es de ${cuponEncontrado.descuento}%  quedando tu compra en un total de: ${totalConDescto}`)
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});

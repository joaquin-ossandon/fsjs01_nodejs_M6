const express = require("express");
const dayjs = require("dayjs");
const path = require("path");
const hbs = require("hbs");

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

app.set("view engine", "hbs"); // -> le decimos que vamos a usar handlebars
const viewsPath = path.join(__dirname, "src/views");
app.set("views", viewsPath);
const partialsPath = path.join(viewsPath, "templates/partials");
hbs.registerPartials(partialsPath);

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/cuponera", (req, res) => {
  res.render("cuponera_bonita", {
    titulo: "Cuponera",
    cupones,
  });
});

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "home",
  });
});

app.get("/api/validar-cupon", (req, res) => {
  const { codigo, totalcompra = 0 } = req.query; // cliente envía info -> /validar-cupon?codigo=VERANO2026&totalcompra=40000

  const cuponEncontrado = cupones.find((cupon) => cupon.codigo === codigo);

  if (!cuponEncontrado) {
    return res.status(404).json({ valid: false, reason: "No existe" });
  }

  const expirationDate = dayjs(cuponEncontrado.expiracion);
  const hoy = dayjs();

  if (expirationDate.isBefore(hoy)) {
    return res
      .status(498)
      .json({ valid: false, reason: "Está caducado, no sea basura" });
  }

  if (totalcompra < cuponEncontrado.minimo) {
    return res
      .status(422)
      .json({
        valid: false,
        reason: `Necesitas tener un mínimo de: ${cuponEncontrado.minimo}`,
      });
  }

  const totDesct = totalcompra * (cuponEncontrado.descuento / 100);
  const totalConDescto = totalcompra - totDesct;

  res.json({
    valid: true,
    reason: `Tu código de cupón ${cuponEncontrado.codigo} es válido. tu descuento es de ${cuponEncontrado.descuento}%  quedando tu compra en un total de: ${totalConDescto}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});

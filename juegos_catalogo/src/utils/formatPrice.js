const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" })

  return formatter.format(price) // returns numéro formateado -> $20.000
}

module.exports = {formatPrice}
const colorByStock = (stock) => {
  if(stock > 10) return "success"
  if(stock > 1) return "warning"
  if(stock <= 1) return "danger"
}

module.exports = { colorByStock }
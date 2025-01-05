function formatCurrencyMXN(number: number) {
  const formatted = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(number)
  return `${formatted} MXN`
}
function formatCurrencyUSD(number: number) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
  return `${formatted} USD`
}

export { formatCurrencyMXN, formatCurrencyUSD }

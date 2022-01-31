export const getProducts = async (search) => {
  const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  )
  return await response.json()
}
export const getProduct = async (id) => {
  return await fetch(`https://api.mercadolibre.com/items/${id}`)
    .then(response => response.json())
}
export const getDescription = async (id) => {
  return await fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then(response => response.json())
}

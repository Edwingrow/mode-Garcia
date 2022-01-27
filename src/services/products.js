export const getProducts = async (search) => {
  const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    );
    return await response.json();
};

export const fetchProduct = async (list) => {
  if (!list) throw new Error('ID não informado');
  const response = await fetch(`https://api.mercadolibre.com/items/${list}`);
  const product = await response.json();
  return product;
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await result.json();
  return data.results;
};

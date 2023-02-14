export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await result.json();
  return data.results;
};

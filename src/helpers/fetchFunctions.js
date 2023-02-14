export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  try {
    if (query === '') {
      throw new TypeError('Termo de busca não informado');
    }
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await result.json();
    return data.results;
  } catch (error) {
    return error;
  }
};

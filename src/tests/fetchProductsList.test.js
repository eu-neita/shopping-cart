import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('testa se ao passar o parametro computador a função fetchProductsList tretorna o objeto correto', async () =>{
    const fetchListVeryfy = await fetchProductsList('computador');
    expect(fetchListVeryfy).toBe(computadorSearch);
  });

  it('testa se ao passar nenhum parametro a função fetchProductsList tretorna erro', async () =>{
    const fetchProduReturn = await fetchProductsList('');
    expect(fetchProduReturn.message).toBe('Termo de busca não informado');
  });
  // it('...', () => {
  // });
});

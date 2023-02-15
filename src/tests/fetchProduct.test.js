import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('testando se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('testando se fetchProduct é chamada', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('testa se ao passar o parametro MLB1405519561 a função fetchProduct tretorna o objeto correto', async () =>{
    const fetchListVeryfy = await fetchProduct('MLB1405519561');
    expect(fetchListVeryfy).toBe(product);
  });

  it('testa se ao passar nenhum parametro a função fetchProduct tretorna erro', () =>{
    const data = fetchProduct();
    expect(data).rejects.toThrow('ID não informado');
  });
});

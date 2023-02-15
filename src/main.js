import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const loadingStaging = () => {
  const loadSection = document.querySelector('.products');
  const p = document.createElement('p');
  p.setAttribute('class', 'loading');
  p.innerText = 'carregando...';
  return loadSection.appendChild(p);
};

const createError = () => {
  const loadSection = document.querySelector('.products');
  const pa = document.createElement('p');
  pa.setAttribute('class', 'error');
  pa.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  return loadSection.appendChild(pa);
};

document.querySelector('.cep-button').addEventListener('click', searchCep);

const printProducts = async () => {
  try {
    loadingStaging();
    const sections = document.querySelector('.products');
    const products = await fetchProductsList('computador');
    products.forEach((product) => {
      sections.appendChild(createProductElement(product));
    });
  } catch (error) {
    createError();
  } finally {
    const p = document.querySelector('.loading');
    p.remove();
  }
};
printProducts();

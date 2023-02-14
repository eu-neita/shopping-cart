import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const loadingStaging = () => {
  const loadSection = document.querySelector('.products');
  const span = document.createElement('span');
  span.setAttribute('id', 'load');
  span.innerText = 'carregando...';
  return loadSection.appendChild(span);
};

document.querySelector('.cep-button').addEventListener('click', searchCep);

const printProducts = async () => {
  try {
    loadingStaging();
    const sections = document.querySelector('.products');
    const products = await fetchProductsList('computador');
    products.forEach((product) => sections.appendChild(createProductElement(product)));
    sections.removeChild(sections.firstElementChild);
  } catch (error) {
    const sections = document.querySelector('.products');
    sections.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};
printProducts();

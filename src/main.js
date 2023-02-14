import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);



const printProducts = async () => {
  try {
    const sections = document.querySelector('.products');
    const products = await fetchProductsList('computador');
    products.forEach((product) => sections.appendChild(createProductElement(product)));
  } catch (error) {
    const sections = document.querySelector('.products');
    sections.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};

printProducts();

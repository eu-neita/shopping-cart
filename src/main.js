import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { loadingStaging, createError } from './helpers/adviserFunctions';
import './style.css';

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

import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
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

const savedCart = async () => {
  const [catchCart] = document.getElementsByClassName('cart__products');
  const savedStorage = await Promise.all([...getSavedCartIDs()]);
  const allpro = [];
  savedStorage.forEach(async (data) => {
    allpro.push(fetchProduct(data));
  });
  const result = await Promise.all([...allpro]);
  console.log(result);
  result.forEach((data) => {
    catchCart
      .appendChild(createCartProductElement(data));
  });
};

printProducts();
savedCart();

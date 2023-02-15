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
  try {
    const [catchCart] = document.getElementsByClassName('cart__products');
    const savedStorage = getSavedCartIDs();
    console.log(savedStorage);
    savedStorage.forEach(async (pro) => catchCart
      .appendChild(createCartProductElement(await fetchProduct(pro))));
  } catch (error) {
    return error.message;
  }
};

printProducts();
savedCart();

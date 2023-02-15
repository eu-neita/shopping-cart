export const loadingStaging = () => {
  const loadSection = document.querySelector('.products');
  const p = document.createElement('p');
  p.setAttribute('class', 'loading');
  p.innerText = 'carregando...';
  return loadSection.appendChild(p);
};

export const createError = () => {
  const loadSection = document.querySelector('.products');
  const pa = document.createElement('p');
  pa.setAttribute('class', 'error');
  pa.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  return loadSection.appendChild(pa);
};

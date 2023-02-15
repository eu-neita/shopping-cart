export const getAddress = async (cep) => {
  if (!cep) throw new Error('CEP não informado');
  const promise1 = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const promise2 = fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const promises = [promise1, promise2];
  const result = await Promise.any(promises);
  if (!result.ok) throw new TypeError('CEP não encontrado');
  const dataCep = await result.json();
  return dataCep;
};

const cepDisplay = document.querySelector('.cart__address');

export const searchCep = async () => {
  try {
    const cepValue = document.querySelector('.cep-input').value;
    const data = await getAddress(cepValue);
    cepDisplay
      .innerHTML = `${data.address} - ${data
        .district} - ${data.city} - ${data.state}`;
  } catch (error) {
    cepDisplay.innerHTML = 'CEP não encontrado';
  }
};

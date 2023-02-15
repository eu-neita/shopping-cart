export const getAddress = async (cep) => {
  if (!cep) throw new Error('CEP não informado');
  const promise2 = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const promise3 = fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const promises = [promise2, promise3];
  const promise = await Promise.any(promises);
  const dataCep = await promise.json();
  return dataCep;
};

const cepDisplay = document.querySelector('.cart__address');

export const searchCep = async () => {
  try {
    const cep = document.querySelector('.cep-input').value;
    const data = await getAddress(cep);
    if (data.city === undefined) throw new Error('CEP não encontrado');
    cepDisplay
      .innerHTML = `${data.address_name} - ${data
        .district} - ${data.city} - ${data.state}`;
  } catch (error) {
    cepDisplay.innerHTML = error.message;
  }
};

// Installing axios
import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Hola mundo');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  const rta = await delay(1000);
  console.log(rta);
  console.log('===========');

  const products = await getProducts();
  const products2 = await getProductsAsync();
  console.log('Products', products2);
})();

// Installing axios
import axios from 'axios';
import { Products } from './models/product.model';

(async () => {
  async function getProductsAsync() {
    //async function getProductsAsync(): Promise<Products[]> {
    const promise = await axios.get<Products[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    //const data = promise.data as Products[];  Forzar el tipo de dato
    return promise.data;
  }

  const products2 = await getProductsAsync();
  console.log(
    'Products',
    products2.map((product) => `${product.id} ${product.title}`)
  );
})();

import { readdir, readFile } from 'fs/promises';

export async function getProduct(product) {
  // get specific product data
  const data = await readFile(`src/json/${product}.json`, 'utf8');
  return JSON.parse(data);
}

export async function getProductData() {
  // get all products
  const productFiles = await getStaticProductFiles();
  const products = [];

  for (const link of productFiles) {
    const product = await getProduct(link);

    products.push({ product, link }); // add product and link on the products array
  }

  return products;
}

export async function getStaticProductFiles() {
  const files = await readdir('src/json/');

  return files
    .filter((file) => file.endsWith('.json')) // read only files with json
    .map((file) => file.slice(0, -5)); // remove .json on the file name with json
}

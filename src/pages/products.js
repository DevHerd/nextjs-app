import Nav from '@/blocks/Nav/Nav';
import { getProductData } from '@/services/getProduct';
import Link from 'next/link';
import { firebaseDB } from '@/services/firebase';
import ProductCard from '@/components/ProductCard/ProductCard';
import Grid from '@/components/Grid/Grid';

export async function getServerSideProps() {
  const productFiles = await getProductData();
  const {
    list,
    data: { products },
  } = await firebaseDB();

  return {
    props: {
      productFiles,
      products,
    },
  };
}

const Products = ({ productFiles, list, products }) => {
  console.log(products);

  // const renderProduct = () => {};

  return (
    <>
      <Nav />
      <section>
        <h1>Product Page</h1>
        <Grid>
          {products.map(({ price, name, uid }) => (
            <ProductCard key={uid} name={name} price={price} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Products;

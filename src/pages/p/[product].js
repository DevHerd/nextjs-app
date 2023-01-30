import Nav from '@/blocks/Nav/Nav';
import { firebaseDB } from '@/services/firebase';
import { getStaticProductFiles, getProduct } from '@/services/getProduct';

//getStaticPaths: this function will return the path of the page via context inside the getStaticProps
//console log the context inside the getStaticProps
export async function getStaticPaths() {
  // const {
  //   data: { products },
  // } = firebaseDB();
  // console.log(products);

  const productFiles = await getStaticProductFiles();

  return {
    paths: productFiles.map((name) => ({
      params: { product: name },
    })),

    fallback: false,
  };
}

//getStaticProps: this function helps to pass the return props to the Page
export async function getStaticProps({ params: { product } }) {
  const productData = await getProduct(product);

  return {
    props: {
      productData,
    },
  };
}

//Get productData from props via getStaticProps
const product = ({ productData }) => {
  // console.log(productData);
  const { name, price } = productData;
  console.log(productData);

  return (
    <>
      <Nav />
      <section>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </section>
    </>
  );
};
export default product;

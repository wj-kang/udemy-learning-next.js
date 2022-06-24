import fs from 'fs/promises'; // Node module. only work on Node server-side
import path from 'path'; // NextJS determines itself what imports are for client and vice versa.

import { useRouter } from 'next/router';

function ProductDetail({ loadedProduct }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <h3>{loadedProduct.description}</h3>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((p) => p.id === productId);

  // if (!product) {
  //   return { notFound: true };
  // }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((p) => p.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false, // because all paths are included as static paths
  };
}

export default ProductDetail;

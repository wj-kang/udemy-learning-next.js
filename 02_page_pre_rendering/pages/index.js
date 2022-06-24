import fs from 'fs/promises'; // Node module. only work on Node server-side
import path from 'path'; // NextJS determines itself what imports are for client and vice versa.
import Link from 'next/link';

function Home(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length < 1) {
    return { notFound: true };
  }

  return {
    props: data,
    revalidate: 10, // only for prod env. (seconds)
  };
}

export default Home;

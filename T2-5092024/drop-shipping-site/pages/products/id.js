import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const products = [
  { id: 1, name: 'Product 1', price: '$50', description: 'This is product 1.' },
  { id: 2, name: 'Product 2', price: '$100', description: 'This is product 2.' },
  { id: 3, name: 'Product 3', price: '$150', description: 'This is product 3.' },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
    </Layout>
  );
}

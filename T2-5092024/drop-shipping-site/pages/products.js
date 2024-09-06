import Link from 'next/link';
import Layout from '../components/Layout';

const products = [
  { id: 1, name: 'Product 1', price: '$50' },
  { id: 2, name: 'Product 2', price: '$100' },
  { id: 3, name: 'Product 3', price: '$150' },
];

export default function Products() {
  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

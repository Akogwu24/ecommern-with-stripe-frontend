import http from '../services/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ sort, cat, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      // setLoading(true);
      try {
        const { data } = await http.get(cat ? `/products?category=${cat}` : '/products');

        setProducts(data?.data);
      } catch (e) {
        console.log(e.response);
      } finally {
        // setLoading(false);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(products.filter((item) => Object.entries(filters).every(([Key, value]) => item[Key].includes(value))));
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((filteredProducts) => [...filteredProducts].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilteredProducts((filteredProducts) => [...filteredProducts].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((filteredProducts) => [...filteredProducts].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products?.slice(0.8)?.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;

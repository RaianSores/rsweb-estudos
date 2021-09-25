import { useCallback, useEffect, useState } from 'react';

import styles from "../styles/pages/Home.module.scss";

import { Products } from "../components/Products";
import { loadProducts } from "../services/utils";
import Header from '../components/Header/Header';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [productsPerPage,] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadProducts = useCallback(async (page, productsPerPage) => {
    const productsGrid = await loadProducts();

    setProducts(productsGrid.slice(page, productsPerPage));
    setAllProducts(productsGrid);
  }, []);

  useEffect(() => {
    handleLoadProducts(0, productsPerPage);
  },[handleLoadProducts, productsPerPage]);

  const loadMoreProducts = () => {
    const nextPage = page + productsPerPage;
    const nextProducts = allProducts.slice(nextPage, nextPage + productsPerPage);
    products.push(...nextProducts);

    setProducts(products);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMoreProducts = page + productsPerPage >= allProducts.length;
  const filteredProducts = searchValue
    ? allProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
    : products;

  return (
    <>
      <Header />
      <div className={styles.container}>
        {filteredProducts.length > 0 && <Products products={filteredProducts}/>}
      </div>
    </>
  );
};

import { useCallback, useEffect, useState } from "react";

import styles from "../styles/pages/Home.module.scss";

import { Products } from "../components/Products";
import { TextInput } from "../components/TextInput";
import { loadProducts } from "../services/utils";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [productsPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadProducts = useCallback(async (page, productsPerPage) => {
    const productsGrid = await loadProducts();

    setProducts(productsGrid.slice(page, productsPerPage));
    setAllProducts(productsGrid);
  }, []);

  useEffect(() => {
    handleLoadProducts(0, productsPerPage);
  }, [handleLoadProducts, productsPerPage]);

  const loadMoreProducts = () => {
    const nextPage = page + productsPerPage;
    const nextProducts = allProducts.slice(
      nextPage,
      nextPage + productsPerPage
    );
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
        return product.title
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      })
    : products;

  return (
    <>
    <Heading />
    <section className={styles.container}> 
      <div className={styles.searchContainer}>
        {!!searchValue && <h1>Consulta de produtos: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={handleChange}/>
      </div>
      {filteredProducts.length > 0 && (
          <Products products={filteredProducts} />
          )}
      {filteredProducts.length === 0 && <p>Desculpa, não encontramos produtos com esse nome!</p>}    

      <div className={styles.buttonContainer}>
        {!!searchValue && <Button text="Load more products" onClick={loadMoreProducts} disabled={noMoreProducts}/>}
      </div>
    </section>
    </>
  );
}

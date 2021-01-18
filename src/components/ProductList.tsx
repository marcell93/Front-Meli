import * as React from 'react';
import { FC, ReactElement, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductItemList from './ProductItemList';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  productList: {
    width: '70%',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      width: '100%',
    }
  },
  categories: {
    margin: '16px 0',
    color: '#999999'
  },
});

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  address: {
    state_name: string;
  };
  shipping: {
    free_shipping: boolean;
  }
}
interface SearchProducts {
  categories: string[];
  items: Product[];
}

const ProductList: FC = (): ReactElement => {
  const [products, setProducts] = useState<SearchProducts>();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    (async () => {
      try {
        const res = await fetch('http://localhost:3100/api/items/?q=' + search);
        const resJson = await res.json();
        resJson.items = resJson.items?.slice(0, 4) ?? [];
        setProducts(resJson);
      } catch (error) {
        toast.error('Error cargando los productos');
      }
    })();
  }, [location]);

  return (
    <div className={css(styles.productList)}>
      <p className={css(styles.categories)}>{products?.categories?.join(' > ')}</p>
      {
        products?.items.map(p =>
          <ProductItemList
            key={p.id} id={p.id} image={p.thumbnail}
            price={p.price} title={p.title}
            place={p.address?.state_name} shipping={p.shipping?.free_shipping}
          />
        )
      }
    </div>
  )
};

export default ProductList;

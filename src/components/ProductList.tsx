import * as React from "react";
import { FC, ReactElement, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import ProductItemList from "./ProductItemList";

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  address: {
    state_name: string;
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
    <div>
      <p>Product List</p>
      {
        products?.items.map(p => <ProductItemList key={p.id} id={p.id} image={p.thumbnail} price={p.price} title={p.title} place={p.address?.state_name} />)
      }
    </div>
  )
};

export default ProductList;

import * as React from "react";
import { FC, ReactElement, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import ProductItemList from "./ProductItemList";

const ProductList: FC = (): ReactElement => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    (async () => {
      try {
        const res = await fetch('/products/' + search);
        setProducts(await res.json());
      } catch (error) {
        toast.error('Error cargando los productos');
      }
    })();
  }, [location]);

  return (
    <div>
      <p>Product List</p>
      {
        products.map(p => <ProductItemList id='' image='' price={1} description='desc' place='' />)
      }
    </div>
  )
};

export default ProductList;

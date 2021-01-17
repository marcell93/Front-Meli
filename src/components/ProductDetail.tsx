import * as React from "react";
import { FC, ReactElement, useState, useEffect } from "react";
import { toast } from 'react-toastify';

const ProductDetail: FC = (props): ReactElement => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = (props as any)?.match?.params?.id;
    (async () => {
      try {
        const res = await fetch('http://localhost:3100/api/items/' + id);
        const resJson = await res.json();
        setProduct(resJson);
      } catch (error) {
        toast.error('Error cargando el producto');
      }
    })();
  }, []);

  return (
    <div>
      <p>Product Detail</p>
    </div>
  )
};

export default ProductDetail;

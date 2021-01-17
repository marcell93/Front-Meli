import * as React from 'react';
import { FC, ReactElement, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  productDetail: {
    width: '70%',
    margin: '0 auto'
  },
  detailContainer: {
    background: '#ffffff',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
  leftSection: {
    width: '70%',
  },
  rightSection: {
    width: '30%',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '32px'
  },
  title: {
    margin: '0',
  },
  productImg: {
    width: '50%',
    borderRadius: '4px',
  },
  shippingImg: {
    marginLeft: '10px',
    width: '20px',
    height: '20px',
  },
  placeText: {
    alignSelf: 'center',
  }
});

const ProductDetail: FC = (props): ReactElement => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = (props as any)?.match?.params?.id;
    (async () => {
      try {
        const res = await fetch('http://localhost:3100/api/items/' + id);
        const resJson = await res.json();
        setProduct(resJson.item);
      } catch (error) {
        toast.error('Error cargando el producto');
      }
    })();
  }, []);

  return (
    <div className={css(styles.productDetail)}>
      <p>Electronica, Audio y video > Ipod > Reproducciones</p>
      <div className={css(styles.detailContainer)}>
        <div className={css(styles.leftSection)}>
          <img src={product?.secure_thumbnail} className={css(styles.productImg)} />
          <h2 className={css(styles.descriptionTitle)}>Descripción del producto</h2>
          <span className={css(styles.description)}>{product?.description}</span>
        </div>
        <div className={css(styles.rightSection)}>
          <span>{product?.attributes?.map(a => a.value_name )?.join(' > ')}</span>
          <h3>{product?.title}</h3>
          <h2>$ {product?.price}</h2>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;

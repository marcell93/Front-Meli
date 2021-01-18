import * as React from 'react';
import { FC, ReactElement, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  productDetail: {
    width: '70%',
    margin: '0 auto',
    '@media (max-width: 750px)': {
      width: '100%',
    }
  },
  detailContainer: {
    background: '#ffffff',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 750px)': {
      flexDirection: 'column'
    }
  },
  leftSection: {
    width: '70%',
    '@media (max-width: 750px)': {
      width: '100%',
    }
  },
  rightSection: {
    width: '30%',
    '@media (max-width: 750px)': {
      width: '100%',
    }
  },
  productImg: {
    width: '100%',
    maxWidth: '680px',
    borderRadius: '4px',
  },
  shippingImg: {
    marginLeft: '10px',
    width: '20px',
    height: '20px',
  },
  descriptionTitle: {
    marginLeft: '32px',
  },
  description: {
    margin: '32px 32px 32px 32px',
  },
  atributes: {
    fontSize: '14px',
    marginTop: '32px',
    marginBottom: '16px',
    display: 'block'
  },
  title: {
    fontSize: '24px',
    margin: 0
  },
  price: {
    margin: '32px 0',
    fontSize: '46px',
  },
  buyBtn: {
    background: '#3483fa',
    borderColor: '#3483fa',
    color: '#ffffff',
    borderRadius: '4px',
    width: '90%',
    marginRight: '32px',
  },
  categories: {
    margin: '16px 0',
    color: '#999999'
  },
});

const ProductDetail: FC = (props): ReactElement => {
  const [product, setProduct] = useState(undefined);

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
      <p className={css(styles.categories)}>{product?.attributes?.filter(a => a.value_name !== 'Sí' && !Number(a.value_name) ).map(a => a.value_name )?.join(' > ')}</p>
      <div className={css(styles.detailContainer)}>
        <div className={css(styles.leftSection)}>
          <img src={product?.secure_thumbnail} className={css(styles.productImg)} />
          <h2 className={css(styles.descriptionTitle)}>Descripción del producto</h2>
          <span className={css(styles.description)}>{product?.description}</span>
        </div>
        <div className={css(styles.rightSection)}>
          <span className={css(styles.atributes)}>{product?.attributes?.slice(0, 2)?.map(a => a.value_name )?.join(' > ')}</span>
          <h3 className={css(styles.title)}>{product?.title}</h3>
          <h2 className={css(styles.price)}>$ {product?.price}</h2>
          <button className={css(styles.buyBtn)}>Comprar</button>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;

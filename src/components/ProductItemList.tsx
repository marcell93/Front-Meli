import * as React from 'react';
import { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
const shippingImg = require('./../assets/img/ic_shipping.png');

const styles = StyleSheet.create({
  productItemList: {
    background: '#ffffff',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  centerSection: {
    width: '60%',
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
    maxWidth: '180px',
    maxHeight: '180px',
    borderRadius: '4px',
    marginRight: '16px',
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

interface ProductItemListProps {
  id: string;
  image: string;
  price: number;
  title: string;
  place: string;
  shipping: boolean;
}

const ProductItemList: FC<ProductItemListProps> = (props): ReactElement => {
  const history = useHistory();

  const goToProductDetail = () => {
    history.push('/items/' + props.id);
  }

  return (
    <div className={css(styles.productItemList)} >
      <img onClick={goToProductDetail} src={props.image} className={css(styles.productImg)}/>
      <div className={css(styles.centerSection)}>
        <div className={css(styles.priceContainer)}>
          <h2>$ {props.price}</h2>
          {
            props.shipping && 
            <img src={shippingImg.default} className={css(styles.shippingImg)}/>
          }
        </div>
        <h3 className={css(styles.title)}>{props.title}</h3>
      </div>
      <span className={css(styles.placeText)}>{props.place}</span>
    </div>
  )
};

export default ProductItemList;

import * as React from "react";
import { FC, ReactElement } from "react";
import { useHistory } from 'react-router-dom';

interface ProductItemListProps {
  id: string;
  image: string;
  price: number;
  title: string;
  place: string;
}

const ProductItemList: FC<ProductItemListProps> = (props): ReactElement => {
  const history = useHistory();

  const goToProductDetail = () => {
    history.push('/items/' + props.id);
  }

  return (
    <div>
      <p onClick={goToProductDetail}>Product Item</p>
    </div>
  )
};

export default ProductItemList;

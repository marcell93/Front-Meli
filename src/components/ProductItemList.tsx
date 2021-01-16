import * as React from "react";
import { FC, ReactElement } from "react";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

interface ProductItemListProps {
  id: string;
  image: string;
  price: number;
  description: string;
  place: string;
}

const ProductItemList: FC<ProductItemListProps> = (props): ReactElement => {

  return (
    <div>
      <p>Product Item</p>
    </div>
  )
};

export default ProductItemList;

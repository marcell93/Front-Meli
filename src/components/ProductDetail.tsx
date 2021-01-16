import * as React from "react";
import { FC, ReactElement, useState } from "react";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

const ProductDetail: FC = (): ReactElement => {
  const [search, setSearch] = useState<string>();

  return (
    <div>
      <p>Product Detail</p>
    </div>
  )
};

export default ProductDetail;

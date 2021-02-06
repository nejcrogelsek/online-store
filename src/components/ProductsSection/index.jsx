/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import ProductBox from "./ProductBox/ProductBox";
import MainImage from "../../assets/images/camera.jpg";

const ProductsSection = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, title: "Man" },
    { id: 2, title: "Women" },
    { id: 3, title: "Furniture" },
    { id: 4, title: "Computer Equipment" },
    { id: 5, title: "Accessories" },
    { id: 6, title: "Other Products" },
  ]);
  const [subCategories, setSubCategories] = useState([
    { id: 1, title: "Man" },
    { id: 2, title: "Women" },
    { id: 3, title: "Furniture" },
    { id: 4, title: "Computer Equipment" },
    { id: 5, title: "Accessories" },
    { id: 6, title: "Other Products" },
  ]);
  const [products, setProducts] = useState([
    { id: 1, title: "MH02-Black09", old_price: 700, price: 350 },
    { id: 2, title: "Nullan lectus", old_price: 700, price: 350 },
    { id: 3, title: "MH02-Black09", old_price: 700, price: 350 },
    { id: 4, title: "Impulse duffle2", old_price: 700, price: 350 },
  ]);
  return (
    <div id='products-section'>
      <div className='ps-wrapper'>
        <div className='ps-top'>
          <span>
            <ImportantDevicesIcon />
            Mobile & table
          </span>
          <ul className='ps-cat-list'>
            {categories.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </div>
        <div className='ps-bottom'>
          <div className='ps-sub-cat-wrapper'>
            <ul className='ps-sub-cat-list'>
              {subCategories.map(({ title }) => (
                <li key>{title}</li>
              ))}
            </ul>
          </div>
          <div className='ps-main-picture'>
            <img src={MainImage} alt='Main image' />
          </div>
          <div className='ps-products-wrapper'>
            {products.map(({ id, title, old_price, price }) => (
              <ProductBox
                key={id}
                title={title}
                old_price={old_price}
                price={price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
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
    {
      id: 1,
      title: "MH02-Black09",
      old_price: 700,
      price: 350,
      image_url:
        "//cdn.shopify.com/s/files/1/0041/3712/3938/products/product-9.jpg?v=1537958643",
    },
    {
      id: 2,
      title: "Nullan lectus",
      old_price: 700,
      price: 350,
      image_url:
        "//cdn.shopify.com/s/files/1/0041/3712/3938/products/product-10.jpg?v=1537959147",
    },
    {
      id: 3,
      title: "MH02-Black09",
      old_price: 700,
      price: 350,
      image_url:
        "//cdn.shopify.com/s/files/1/0041/3712/3938/products/product-11.jpg?v=1537959096",
    },
    {
      id: 4,
      title: "Impulse duffle2",
      old_price: 700,
      price: 350,
      image_url:
        "//cdn.shopify.com/s/files/1/0041/3712/3938/products/product-12.jpg?v=1537958863",
    },
  ]);

  useEffect(() => {
    setCategory(categories[0].title);
  }, []);

  const changeCategory = (title) => {
    console.log("Change Category");
  };
  const changeSubCategory = (title) => {
    console.log("Change SubCategory");
  };

  return (
    <div id='products-section'>
      <div className='ps-wrapper'>
        <div className='ps-top'>
          <span>
            <ImportantDevicesIcon />
            {category}
          </span>
          <ul className='ps-cat-list'>
            {categories.map(({ id, title }) => (
              <li key={id}>
                <span onClick={() => changeCategory(title)}>{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='ps-bottom'>
          <div className='ps-sub-cat-wrapper'>
            <ul className='ps-sub-cat-list'>
              {subCategories.map(({ id, title }) => (
                <li key={id}>
                  <span onClick={() => changeSubCategory(title)}>{title}</span>
                </li>
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

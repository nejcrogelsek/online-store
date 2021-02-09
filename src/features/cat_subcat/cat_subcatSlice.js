import { createSlice } from "@reduxjs/toolkit";

export const cat_subcatSlice = createSlice({
  name: "cat_subcat",
  initialState: {
    cat_with_subcat: [
      {
        name: "Man",
        dropdown: true,
        subcat: [
          {
            title: "Man Shoes",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "shoes1",
              },
              {
                subcat_name: "shoes2",
              },
              {
                subcat_name: "shoes3",
              },
              {
                subcat_name: "shoes4",
              },
            ],
          },
          {
            title: "Man Clothes",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "clothes1",
              },
              {
                subcat_name: "clothes2",
              },
              {
                subcat_name: "clothes3",
              },
              {
                subcat_name: "clothes4",
              },
            ],
          },
          {
            title: "Man Underwear",
            inner_dropdown: false,
            inner_subcat: [
              {
                subcat_name: "underwear1",
              },
              {
                subcat_name: "underwear1",
              },
              {
                subcat_name: "underwear1",
              },
              {
                subcat_name: "underwear1",
              },
            ],
          },
          {
            title: "Other",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "Watches",
              },
              {
                subcat_name: "Sunglasses",
              },
              {
                subcat_name: "Wallet",
              },
            ],
          },
        ],
      },
      {
        name: "Women",
        dropdown: true,
        subcat: [
          {
            title: "Women Shoes",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "shoes1",
              },
              {
                subcat_name: "shoes2",
              },
              {
                subcat_name: "shoes3",
              },
              {
                subcat_name: "shoes4",
              },
            ],
          },
          {
            title: "Women Clothes",
            inner_dropdown: false,
            inner_subcat: [
              {
                subcat_name: "clothes1",
              },
              {
                subcat_name: "clothes2",
              },
              {
                subcat_name: "clothes3",
              },
              {
                subcat_name: "clothes4",
              },
            ],
          },
          {
            title: "Women Underwear",
            inner_dropdown: false,
            inner_subcat: [
              {
                subcat_name: "underwear1",
              },
              {
                subcat_name: "underwear1",
              },
              {
                subcat_name: "underwear1",
              },
              {
                subcat_name: "underwear1",
              },
            ],
          },
          {
            title: "Other",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "Watches",
              },
              {
                subcat_name: "Sunglasses",
              },
              {
                subcat_name: "Wallet",
              },
            ],
          },
        ],
      },
      { name: "Furniture", dropdown: false },
      { name: "Computer equipment", dropdown: false },
      { name: "Accessories", dropdown: false },
      { name: "Other products", dropdown: false },
      { name: "Reduced prices", dropdown: false },
      {
        name: "More",
        dropdown: true,
        subcat: [
          {
            title: "main1",
            inner_dropdown: false,
            inner_subcat: [
              {
                subcat_name: "krneki1",
              },
              {
                subcat_name: "krneki2",
              },
              {
                subcat_name: "krneki3",
              },
              {
                subcat_name: "krneki4",
              },
            ],
          },
          {
            title: "main2",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "krneki1",
              },
              {
                subcat_name: "krneki2",
              },
              {
                subcat_name: "krneki3",
              },
              {
                subcat_name: "krneki4",
              },
            ],
          },
          {
            title: "main3",
            inner_dropdown: false,
            inner_subcat: [
              {
                subcat_name: "krneki1",
              },
              {
                subcat_name: "krneki2",
              },
              {
                subcat_name: "krneki3",
              },
              {
                subcat_name: "krneki4",
              },
            ],
          },
          {
            title: "main4",
            inner_dropdown: true,
            inner_subcat: [
              {
                subcat_name: "krneki1",
              },
              {
                subcat_name: "krneki2",
              },
              {
                subcat_name: "krneki3",
              },
            ],
          },
        ],
      },
    ],
  },
  reducers: {
    addCategory: (state, action) => {
      state.cat_with_subcat = [...state.cat_with_subcat, action.payload];
    },
  },
});

export const { addCategory } = cat_subcatSlice.actions;

export const cat_subcat_select = (state) => state.cat_subcat.cat_with_subcat;

export default cat_subcatSlice.reducer;

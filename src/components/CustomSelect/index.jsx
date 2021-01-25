import React, { useEffect, useState } from "react";
import { Select, FormControl, MenuItem } from "@material-ui/core/";
import useStyles from "./styles";

const CustomSelect = ({ values }) => {
  const classes = useStyles();

  const [stateValue, setStateValue] = useState(null);

  useEffect(() => {
    setStateValue(values[0].code);
    console.log(values);
  }, []);

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}>
          {values.map((value) => (
            <MenuItem key={value.code} value={value.code}>
              {stateValue}
            </MenuItem>
          ))}
          <MenuItem value={10}>SL</MenuItem>
          <MenuItem value={20}>EN</MenuItem>
          <MenuItem value={30}>DE</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default CustomSelect;

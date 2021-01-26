import React, { useEffect, useState } from "react";
import "./styles.css";

const CustomSelect = ({ values }) => {
  const [stateValue, setStateValue] = useState(null);

  useEffect(() => {
    setStateValue(values[0].code);
    console.log(values);
  }, []);

  return (
    <>
      <div class='select'>
        <select
          id='standard-select'
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}>
          {values.map((value) => (
            <option key={value.code} value={value.code}>
              {value.code}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CustomSelect;

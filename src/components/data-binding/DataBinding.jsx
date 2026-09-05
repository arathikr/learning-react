import { useState } from "react";

const DataBinding = () => {
  const [price, setPrice] = useState(45000);
  var username = "john";
  return (
    <div className="container-fluid">
      <h2>DataBinding</h2>
      <p>Price {price}</p>
    </div>
  );
};

export default DataBinding;

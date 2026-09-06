import { useEffect, useState } from "react";

const DataBinding = () => {
  const [price, setPrice] = useState(45000);
  const [name, setName] = useState("Please set name");
  const [price2, setPrice2] = useState(0);
  const [views, setViews] = useState(0);
  const [stock, setStock] = useState(false);
  const [styleClass, setStyleClass] = useState("bg-warning text-light");
  const [message, setMessage] = useState("Welcome to React");
  useEffect(() => {
    setPrice(67000);
    // setPrice2(9874648399944n);
    setPrice2(560000);
    setViews(68000000);
    setName("Ashok");
    setStyleClass("bg-success text-white");
    // setStock();
  }, []);
  var username = "john";
  return (
    <div className="container-fluid">
      <h2 className={`border border-2 p-3 border-danger ${styleClass}`}>
        DataBinding
      </h2>
      <p>Price {price}</p>
      <p>price2: {price2.toFixed(2)}</p>
      <p>
        price locale:{" "}
        {price2.toLocaleString("en-in", { style: "currency", currency: "INR" })}
      </p>
      <p className="bi bi-eye-fill">
        {views.toLocaleString("en-in", { notation: "compact" })} views
      </p>

      <p>{name}</p>
      <p>stock: {stock === true ? "Available" : "Not Available"}</p>
      <p>{message}</p>
    </div>
  );
};

export default DataBinding;

import { useEffect, useState } from "react";

const DataBinding2 = () => {
  const [products, setProducts] = useState(["TV", "Mobile"]);
  const [categories, setCategories] = useState(
    new Array("Electronics", "Fashion"),
  );
  const [menuItems] = useState([
    "Home",
    "Offers",
    "Shop",
    "COntact",
    "Services",
  ]);

  const productObjects = useState([
    { id: 1, Name: "TV", Price: 45000 },
    { id: 2, Name: "Mobile", Price: 12000 },
    { id: 3, Name: "Watch", Price: 3000 },
  ]);
  const [departure] = useState(new Date());

  useEffect(() => {}, []);
  var username = "john";
  return (
    <div className="container-fluid">
      <h2>Binding Reference types</h2>
      <h3>Departure: {departure.toDateString()}</h3>
      <header className="p-2 mt-2 align-items-center bg-light d-flex justify-content-between">
        <div>
          <span className="bi bi-justify"></span>
          <span className="mx-2">Amazon</span>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search amazon"
          />
          <button className="btn btn-warning bi bi-search"></button>
        </div>
        <nav>
          {menuItems.map((item) => (
            <span className="mx-3" key={item}>
              {item}
            </span>
          ))}
        </nav>
      </header>
      <ol>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ol>
      <select>
        {products.map((product) => (
          <option key={product}>{product}</option>
        ))}
      </select>

      <div>
        <h3>Products Table</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productObjects.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.Name}</td>
                  <td>{obj.Price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataBinding2;

import React, { useState } from "react";
import "./productFrom.css"
const ProductForm = () => {
  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    productPrice: "",
  });

  const [products, setProducts] = useState([]); // store all products
  const [message, setMessage] = useState(""); // for backend communication status

  // Handle input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const data = await response.text();
        setMessage("Successfully communicated with Spring Backend!");
        // Add product to table without removing old ones
        setProducts([...products, product]);
        // Reset input fields
        setProduct({ productId: "", productName: "", productPrice: "" });
      } else {
        setMessage("Failed to communicate with backend.");
      }
    } catch (error) {
      setMessage("Error: Unable to connect to backend.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 border rounded-2xl p-5 shadow">
      <h2 className="text-xl font-bold mb-4">Product Form Detailsssssssss</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Product ID:</label>
        <input
          type="number"
          name="productId"
          value={product.productId}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <label className="block mb-2">Product Name:</label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <label className="block mb-2">Product Price:</label>
        <input
          type="number"
          name="productPrice"
          value={product.productPrice}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4 text-green-700 font-semibold">{message}</p>
      )}

      {/* Product Table */}
      {products.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">All Products:</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index}>
                  <td className="border p-2">{p.productId}</td>
                  <td className="border p-2">{p.productName}</td>
                  <td className="border p-2">{p.productPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductForm;

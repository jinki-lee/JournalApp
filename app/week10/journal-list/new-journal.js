import React, { useState, useEffect } from "react";
import Alert from "./alert";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showAlert]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity("1");
    setCategory("Produce");

    setShowAlert(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section className="dark:bg-gray-900">
      {showAlert && (
        <Alert type="info" onClose={() => setShowAlert(false)}>
          Item added successfully added!
        </Alert>
      )}

      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center sm:items-start w-full max-w-2xl"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full">
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                required
                onChange={handleNameChange}
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={handleQuantityChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>

            <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                required
                onChange={handleCategoryChange}
                value={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="Bakery">Bakery</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dairy">Dairy</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Household">Household</option>
                <option value="Meat">Meat</option>
                <option value="Produce">Produce</option>
              </select>
            </div>

            <div className="sm:col-span-2 md:col-span-2 lg:col-span-1 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 bg-blue-500 hover:bg-blue-700 ml-auto"
              >
                Add product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import NewShoppingNavbar from "./NewShoppingNavabr";

const NewShoppingAdd = () => {
  const [inputData, changeInputData] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
  });
  const inputHandler = (event) => {
    changeInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const readValue = () => {
    console.log(inputData);
  };
  return (
    <div>
      <NewShoppingNavbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={inputData.title}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  value={inputData.description}
                  onChange={inputHandler}
                ></textarea>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={inputData.price}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Discount percentage
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="discountPercentage"
                  value={inputData.discountPercentage}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  rating
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rating"
                  value={inputData.rating}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="stock"
                  value={inputData.stock}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  brand
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={inputData.brand}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={inputData.category}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewShoppingAdd;

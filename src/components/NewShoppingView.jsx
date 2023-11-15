import axios from "axios";
import React, { useEffect, useState } from "react";
import NewShoppingNavbar from "./NewShoppingNavabr";

const View = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NewShoppingNavbar />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 g-3">
          {data &&
            data.products &&
            data.products.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100">
                  <div
                    id={`carousel${product.id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {product.images.map((image, i) => (
                        <div
                          key={i}
                          className={`carousel-item ${i === 0 ? "active" : ""}`}
                        >
                          <img
                            src={image}
                            className="h-25"
                            alt={`${product.title} - ${i}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel${product.id}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel${product.id}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Price: ${product.price}</p>
                    <p className="card-text">Rating: {product.rating}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <p className="card-text">Brand: {product.brand}</p>
                    <p className="card-text">Category: {product.category}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default View;

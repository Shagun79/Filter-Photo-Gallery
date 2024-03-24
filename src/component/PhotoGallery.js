import React, { useEffect, useState } from "react";
import "./PhotoGallery.css";

export const PhotoGallery = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const Products = async () => {
      const api = `https://fakestoreapi.com/products`;
      const response = await fetch(api);
      const resJson = await response.json();
      console.log(resJson);

      setitems(resJson);
    };
    Products();
  }, []);

  const filterItems = (cat) => {
    setitems((arrayValue) => {
      return arrayValue.filter((products) => {
        return products.category === cat;
      });
    });
  }; // this is new array mein wo dikhao jo hum chahte //
  return (
    <>
      <h1> Filter PhotoGallery</h1>
      <div className="btns">
        <button
          onClick={() => {
            filterItems("men's clothing");
          }} // yha pe hum input likh k nhi array display krwa rhe balki  button click krenge uss  hisab se array   item aeaega
        >
          {" "}
          Mens Clothing{" "}
        </button>{" "}
        <button
          onClick={() => {
            filterItems("jewelery");
          }}
        >
          Jewelery
        </button>
        <button
          onClick={() => {
            filterItems("electronics");
          }}
        >
          Electronics
        </button>
        <button
          onClick={() => {
            filterItems("women's clothing");
          }}
        >
          Womens's Clothing
        </button>
      </div>

      <div className="box">
        {items.map((elm, index) => {
          const { description, id, image, price, title } = elm;
          return (
            <div className="grid-container">
              <div className="rows" key={id}>
                <div className="img">
                  <img src={image} alt={title} className="pictures" />
                </div>
                <div className="pro-description">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

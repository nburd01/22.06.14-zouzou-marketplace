import React from "react";

function Apartments(props) {
  return (
    <div>
      <h1>These books are from the API</h1>
      {props.apartments.map((apartment) => {
        return (
          <div key={apartment.id}>
            <h2 className="text-3xl font-bold underline">{apartment.title}</h2>
            <p>{apartment.body}</p>
            <p>{apartment.price} €</p>
          </div>
        );
      })}
    </div>
  );
}

export default Apartments;



import React from "react";

function Apartments(props) {
  return (
    <div>
      <h1>These books are from the API</h1>
      {props.apartments.map((apartment) => {
        return (
          <div key={apartment.id}>
            <h2>{apartment.title}</h2>
            <p>{apartment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Apartments;


// import React from 'react'

// function Apartments(props) {
//   return (
//     <div>
//         <h1>Ces appartements proviennent de l'API mec (et je viens des components)</h1>
//             {props.apartments.map((apartment) => {
                
//             return (
//             <div key={apartment.id}>
//                     <h2>{apartment.title}</h2>  
//                     <p>{apartment.body}</p>
//                     <p>{apartment.price}</p>
//             </div>
//             );

            
                    
//         })}
//     </div>
//   )
// }

// export default Apartments;

